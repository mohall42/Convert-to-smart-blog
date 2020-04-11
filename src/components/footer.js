import React from 'react'
import mainLogo from "../../content/assets/main-logo.svg"
import Twitter from "../../content/assets/twitter.svg"
import Facebook from "../../content/assets/facebook.svg"
import Youtube from "../../content/assets/youtube.svg"
import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    height: 15%;
    width: 100%;
    

    .logo{
        height: 10vh;
        width: 10vw;
        color: white;
        margin: 0;
    }

    .icon{
        height: 100px;
        width: 100px;
        fill: red;
    }

`;


export default function Footer() {


    return (
        <Container>

            <img className='logo' src={mainLogo} alt="Logo"></img>

            <div>
                <ul>

                </ul>
            </div>
        </Container>
    )

}

