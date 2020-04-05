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
    position: relative;
    top: 0;
    justify-content: space-around;
    align-items: center;
    padding: 30px, 10%;
    background-color: black;
    width: 100%;
    


`;
const Logo = styled.img`
    src: url(${props => props.src});
    display: block;
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
                    <MenuItem><Link to="/blogs">Blog</Link></MenuItem>
                    <MenuItem><Link to="/videos">Videos</Link></MenuItem>
                    <MenuItem><Link to="/contact">Contact Me</Link></MenuItem>

                </Menu>
            </ul>

            <Link to="/aboutMe">About Me</Link>

            <Link to={"/"}>
                <Logo src={mainLogo} alt='Convert to Smart'></Logo>
            </Link>
        </Container>
    )


}
