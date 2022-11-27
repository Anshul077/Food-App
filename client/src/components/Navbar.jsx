import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  styled,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import "../App.css";
import { Link } from "react-router-dom";
import chef from '../images/chef.png'
import CartItem from './CartItem';
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

const OrderButton = styled(Button)`
width:80%;
border-radius:23px;
margin:auto auto 20px auto;
background-color:#ff5c19;
color:#ffffff;
  font-family: 'Poppins', sans-serif;
  font-size:15px;
  &:hover{
    color:black;
    background-color:#f9a98a;
  }
  `

const LeftBox = styled(Box)`
  margin-left: auto;
  display: flex;
  justify-content: center;
  aLign-items: center;
`;
const PrimaryBox = styled(Box)`
// height:100%;
// background:#1a1a1a;
// margin-top: 18px;
// border-top-left-radius: 20px;
// border-top-right-radius: 20px;
// display:flex;
//  justify-content:center;
//  align-items:center;
`;
const SecondaryBox = styled(Box)`
height:35rem;
background:#1a1a1a;
margin-top: 18px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display:flex;
 justify-content:space-between;
 flex-direction:column;
 align-items:center;
`;
const Box1 = styled(Box)`
height:50%;
min-width: 400px;
background:#2c2b2b;
margin-top: 18px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display:flex;
 justify-content:space-between;
 align-items:flex-start;
 flex-direction:column;
`;
const Box3 = styled(Box)`
height:80%;
min-width: 400px;
background:transparent;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
display:flex;
 justify-content:center;
 align-items:flex-start;
 flex-direction:column;
`;
const Box2 = styled(Box)`
width: 100%;
padding:10px;
background:#2c2b2b;
border-radius:13px;
display:flex;
`;
const ContainerBox = styled(Box)`
width: 90%;
max-height: 240px;
background:transparent;
margin: 10px 0;
border-radius:13px;
display:flex;
 justify-content:center;
 flex-direction:column;
 align-items:center;
 overflow: auto;
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
const SubHeading = styled(Typography)`
font-size:16px;
color:#b1b1b1;
margin:30px 0 0 20px;
font-family: 'Poppins', sans-serif;
`;
const SubTotal = styled(Typography)`
font-size:18px;
color:#ffffff;
font-weight:bold;
margin:60px 0 0 20px;
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
const InlineHeading = styled("span")({
  marginLeft:'238px',
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
                      <ContainerBox>
                      <Box2>
                        <CartItem/>
              
                      </Box2>
                      
                      
                      </ContainerBox>
                      <Box1>
                      <Box3>
                        <SubHeading style={{marginTop:'-5px'}}>Sub Total<InlineHeading>$10</InlineHeading></SubHeading>
                        <SubHeading >Delivery<InlineHeading  style={{marginLeft:'250px'}}>$10</InlineHeading></SubHeading>
                        <SubTotal>Total</SubTotal>
                      </Box3>
                        <OrderButton >Order Now</OrderButton>
                      </Box1>

                     
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