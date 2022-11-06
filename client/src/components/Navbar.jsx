import React, { useState } from 'react'
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
import { ShoppingBasket, ArrowBack, Delete } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'static',
  height: '65px',
  transition: 'background-color .3s ease-in',
  boxShadow: 'none',
  color: 'black',
  backgroundColor: 'transparent',
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
  aLign-items: center;
`;
const PrimaryBox = styled(Box)`
height:100%;
background:#1a1a1a;
margin-top: 18px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display:flex;
 justify-content:center;
 align-items:center;
`;
const SecondaryBox = styled(Box)`
height:100%;
background:#1a1a1a;
margin-top: 18px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display:flex;
 justify-content:center;
 align-items:center;
`;
const ItemBox = styled(Box)`
width:100%;
height:50px;
padding:0 10px;
//  background:grey;
 display:flex;
 justify-content:space-between;
 align-items:center;
`;

const AppName = styled(Typography)`
font-family: 'Poppins', sans-serif;
`;

const Title = styled(Typography)`
font-family: 'Poppins', sans-serif;
font-weight:bold;
`;

const StyledUl = styled("ul")({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  StyledListStyle: "none",
  margin: "auto 10px 0 40px",
  textDecoration: "none",
});

const StyledLi = styled("li")({
  display: "flex",
  StyledListStyle: "none",
  textDecoration: "none",
  cursor: 'pointer',
  margin: 'auto 35px'

});

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    console.log("hello")
    setSidebar(!sidebar);
  }

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
                <IconContext.Provider value={{ color: "undefined" }}>
                  <div className="navbar">
                    <Link to="#" className="menu-bars">
                      <ShoppingBasket style={{
                        color: 'black', margin: '-9px 0 0 13px'
                      }} onClick={showSidebar} />
                    </Link>
                  </div>
                  <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ItemBox>
                      <ArrowBack onClick={showSidebar} style={{ cursor: 'pointer' }} />
                      <Title>Cart</Title>
                      <Delete />
                    </ItemBox>
                    <PrimaryBox>

                      {/* <img style={{
                        height: '60vh'
                      }} src="https://lh3.googleusercontent.com/A02eP8ms8OLBl-3zpXA6rglLo7vAW8GbWhvMoRZAv6dDqOrfJLWoc903TuhSL87-SFI=w2400" alt="" /> */}

                    <SecondaryBox>

                      {/* <img style={{
                        height: '60vh'
                      }} src="https://lh3.googleusercontent.com/A02eP8ms8OLBl-3zpXA6rglLo7vAW8GbWhvMoRZAv6dDqOrfJLWoc903TuhSL87-SFI=w2400" alt="" /> */}

                    </SecondaryBox>
                    </PrimaryBox>
                  </nav>

                </IconContext.Provider>
              </StyledLi>
              <StyledLi>
                <AvatarImage
                  src={avatar}
                  alt="logo"

                />

              </StyledLi>
            </StyledUl>
          </LeftBox>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default Navbar