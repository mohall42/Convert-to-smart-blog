import React from 'react'
import { Link } from 'gatsby'
import mainLogo from "../../content/assets/main-logo.jpg"
import styled from 'styled-components'

const Container = styled.div`

    background-color: black;
    width: 100%;
    margin: 0, 0;

`
const Logo = styled.img`
    src: url(${props => props.src});
    display: block;
`;

const TempLogo = styled.h1`
    margin: 0, 5%;
    color: white;
    text-align: right;
`;
const MenuItem = styled.li`
    display: inline;
    color: white;

`;

const NavBar = () => {

    return (
        <Container>
            {/* <Link to={"/"}>
                <Logo src={mainLogo} alt='Convert to Smart'></Logo>
            </Link> */}
            <ul>
                <MenuItem>Menu</MenuItem>
                <MenuItem>About Me</MenuItem>
                <MenuItem>Contact</MenuItem>
            </ul>
            <TempLogo>ConvertToSmart</TempLogo>
        </Container>
    )


}

export default NavBar;