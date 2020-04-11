import React from "react"
import Footer from "../components/footer"
import styled from 'styled-components'
import NavBar from "../components/navbar"
import Container from "@material-ui/core/Container"


const StyledContainer = styled(Container)`

  min-height: 85vh;

`;


const Wrapper = styled.div`
 height: 100%;
 display: flex;
 flex-direction: column;
 
`

const Layout = (props) => {

  return (

    <>
      <NavBar />
      <StyledContainer>
        <div>{props.children}</div>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default Layout
