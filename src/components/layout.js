import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import styled from 'styled-components'
import NavBar from "../components/navbar"
import Container from "@material-ui/core/Container"
import { device } from "../components/device"
import { rhythm, scale } from "../utils/typography"



const Wrapper = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 
`

const Layout = (props) => {

  return (

    <>
      <NavBar />
      <Container>
        <div>{props.children}</div>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
