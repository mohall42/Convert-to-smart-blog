import React from 'react'
import { Link } from 'gatsby'
import mainLogo from "../../content/assets/main-logo.png"
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

const StyledLink = styled(Link)`
   box-shadow: none;
   color: black;

`;

const MenuButton = styled(Button)({
    color: 'black'

});

const Container = styled.div`

    display: flex;
    position: relative;
    top: 0;
    justify-content: space-around;
    align-items: center;
    padding: 30px, 10%;
  ${'' /*   background-color: black; */}
    width: 100%;
    margin-bottom: 2%;
    


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
            <StyledLink to={"/"}>
                <Logo src={mainLogo} alt='Convert to Smart'></Logo>
            </StyledLink>
            <ul>
                <MenuButton aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>Menu</MenuButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEL}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem><StyledLink to="/aboutMe">About Me</StyledLink></MenuItem>
                    <MenuItem><StyledLink to="/blogs">Blog</StyledLink></MenuItem>
                    <MenuItem><StyledLink to="/videos">Videos</StyledLink></MenuItem>
                    <MenuItem><StyledLink to="/contact">Contact Me</StyledLink></MenuItem>

                </Menu>
            </ul>


        </Container>
    )


}
