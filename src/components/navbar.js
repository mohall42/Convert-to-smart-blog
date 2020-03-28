import React from 'react'
import { device } from './device'
import { Link } from 'gatsby'
import mainLogo from "../../content/assets/main-logo.svg"
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

const MenuButton = styled(Button)({
    color: 'white'

});

const Container = styled.div`

    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px, 10%;
    background-color: black;
    max-width: ${device.desktop};
    


`;
const Logo = styled.img`
    src: url(${props => props.src});
    display: block;
`;

const TempLogo = styled.h1`
    margin: 0, 5%;
    padding: 0;
    color: blackj;
    text-align: right;
    cursor: pointer;
`;


export default function NavBar() {
    const [anchorEL, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEL);
    const handleClick = event => {

        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <Container>
            <Link to={"/"}>
                <Logo src={mainLogo} alt='Convert to Smart'></Logo>
            </Link>
            {/* <TempLogo>ConvertToSmart</TempLogo> */}
            <ul>
                <MenuButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>Menu</MenuButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEL}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem>Blogs</MenuItem>
                    <MenuItem>Videos</MenuItem>
                    <MenuItem>About Me</MenuItem>
                    <MenuItem>Contact</MenuItem>

                </Menu>
            </ul>

        </Container>
    )


}
