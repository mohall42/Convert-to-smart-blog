import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import styled from 'styled-components'
import NavBar from "../components/navbar"
import { rhythm, scale } from "../utils/typography"

const Wrapper = styled.div`
 position: relative;
 margin-left: auto;
 margin-right: auto;
 height: 100vh;
 max-width: 100%;

`


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <NavBar />
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <Wrapper>
      <header>{header}</header>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
