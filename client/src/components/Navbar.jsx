import React,{useState} from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";
import chef from '../images/chef.png'
import avatar from '../images/avatar.png'
import { IconContext } from "react-icons";
import { ShoppingBasket } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  height: '65px',
  transition: 'background-color .3s ease-in',
  boxShadow: 'none',
  color: 'white',
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    height: '30px',
  }
}))

const LogoImage = styled("img")(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down('sm')]: {
    width: "25%",
    marginRight: 30,
  }
}));

const AvatarImage = styled("img")(({ theme }) => ({
  height: "40px",
  [theme.breakpoints.down('sm')]: {
    width: "25%",
    marginRight: 30,
  }
}));

const LeftBox = styled(Box)`
  margin-left: auto;
  display: flex;
  justify-content: center;
  aStyledLign-items: center;
`;

const AppName = styled(Typography)`
font-family: 'Poppins', sans-serif;
`;

const StyledUl = styled("ul")({
  display: "flex",
  StyledListStyle: "none",
  margin: "auto 10px 0 40px",
  textDecoration: "none",
});

const StyledLi = styled("li")({
  display: "flex",
  StyledListStyle: "none",
  textDecoration: "none",
  cursor:'pointer',
  margin: 'auto 35px'

});

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () =>{
    console.log("hello") 
    setSidebar(!sidebar);}

  return (
    <>
      <StyledAppBar >
        <Toolbar>
          <LogoImage
            src={chef}
            alt="logo"
          />
          <AppName>FoodApp</AppName>
          <LeftBox>
            <StyledUl>
              <StyledLi>Home</StyledLi>
              <StyledLi>Menu</StyledLi>
              <StyledLi>About Us</StyledLi>
              <StyledLi>
             </StyledLi>
                      <ShoppingBasket />
              <StyledLi>
              <IconContext.Provider value={{ color: "undefined" }}>
                  <div className="navbar">
                    <Link to="#" className="menu-bars">
                <AvatarImage
                  src={avatar}
                  alt="logo"
                  onClick={showSidebar}
                  />
                    </Link>
                  </div>
                  <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
            
            </li>
           
          </ul>
        </nav>
                 
                </IconContext.Provider> 

                </StyledLi>
            </StyledUl>
          </LeftBox>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default Navbar