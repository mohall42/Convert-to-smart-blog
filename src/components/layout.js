import React from "react"
import Footer from "../components/footer"
import styled from 'styled-components'
import NavBar from "../components/navbar"
import Container from "@material-ui/core/Container"


const StyledContainer = styled(Container)`

  min-height: 85vh;
  

`;




const Layout = (props) => {

  return (

    <>
      <NavBar />

      <div>{props.children}</div>

      <Footer />
    </>
  )
}

export default Layout
