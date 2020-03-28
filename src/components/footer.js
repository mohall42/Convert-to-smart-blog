import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { device } from './device'
import mainLogo from "../../content/assets/main-logo.svg"
import twitter from "../../content/assets/twitter.svg"
import facebook from "../../content/assets/facebook.svg"
import youtube from "../../content/assets/youtube.svg"

import Link from "gatsby"
import { rhythm, scale } from "../utils/typography"

import styled from 'styled-components'

const Container = styled.div`

    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px, 10%;
    background-color: black;
    max-height: 20%;
    max-width: ${device.desktop};

    .logo{
        height: 300px;
        width: 300px;
        color: white;
    }

    .icon{
        height: 100px;
        width: 100px;
        fill: white;
    }

`;



export default function Footer() {


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}><img className='logo' src={mainLogo} alt="Logo"></img> </Grid>
                <Grid item xs={6}>
                    <ul>
                        <img className='icon' src={twitter} alt="Twitter"></img>
                        <img className='icon' src={facebook} alt="Facebook"></img>
                        <img className='icon' src={youtube} alt="YouTube"></img>

                    </ul>
                </Grid>


            </Grid>

        </Container>
    )

}

