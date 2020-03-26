import React from 'react'
import Link from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from 'styled-components'

const Wrapper = styled.div`

    position: absolute;
    bottom: 0;
    background-color: black;
    min-height: 15vh;
    width: 100%;


`;

const Footer = (props) => {


    return (
        <Wrapper>This is the footer</Wrapper>
    )

}

export default Footer