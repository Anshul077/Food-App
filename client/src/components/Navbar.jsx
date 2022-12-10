import React, { useState, useContext } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  styled,
  Typography,
  Badge
} from "@mui/material";
import { GlobalInfo } from './Home';
import "../App.css";
import { Link } from "react-router-dom";
import chef from '../images/chef.png'
import CartItem from './CartItem';
import avatar from '../images/avatar.png'
import { IconContext } from "react-icons";
import { ShoppingBasket, ArrowBack, Delete, LightMode, DarkMode } from '@mui/icons-material';
import {deleteAllCartItem,checkCart} from '../service.js'
import initializeAuthentication from '../Firebase/firebase-int';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
  height: '65px',
  transition: 'background-color .1s ease-in',
  boxShadow: 'none',
  color: 'black',
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

`;
const SecondaryBox = styled(Box)`
height:36rem;
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

const ContainerBox = styled(Box)`
width: 90%;
max-height: 259px;
background:transparent;
margin: 10px 0;
border-radius:13px;
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
  marginLeft: '238px',
});

const StyledLi = styled("li")({
  display: "flex",
  StyledListStyle: "none",
  textDecoration: "none",
  cursor: 'pointer',
  margin: 'auto 35px'

});


initializeAuthentication()

const provider = new GoogleAuthProvider();

const Navbar = () => {

  const { user, setUser, counter, darkMode, setDarkMode,setCounter } = useContext(GlobalInfo)

  const [sidebar, setSidebar] = useState(false);
  const [val, setVal] = useState(false)
  const [scroll, setScroll] = useState(false)


  const navbarScroll = () => {
    if (window.scrollY >= 20) {
      setScroll(true)
    }
    else { setScroll(false) }
  }

  window.addEventListener('scroll', navbarScroll)



  const handleGoogleAuth = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider).then(result => {
      const newUser = result.user
      console.log(newUser)
      setUser(newUser)
    }).catch(error => {
      console.log(error.message)
    })
  }


  const handleOnClick =async () => {
    let response=await deleteAllCartItem({
      name: user.displayName.replaceAll(' ', ''),
  })
    if(response){
      alert("Cart is emptied")
      setCounter(0)
      setSidebar(!sidebar);
    }

  }

  const handleMode = () => {
    if (darkMode) {
      setDarkMode(false)
      document.body.style.background = "#f0f0f3";
    }
    else {
      setDarkMode(true)
      document.body.style.background = "#181818";
    }

  }

  const showSidebar = async() => {
    if(Object.keys(user).length !== 0)
    {
      let response=await checkCart({
        name: user.displayName.replaceAll(' ', ''),
    })
    if(response.data.message.length===0){
      console.log(response.data.message,response.data.message.length)
      setVal(true)
    }
    else{
      console.log(response.data.message,response.data.message.length)
      setVal(false)

    }
    setSidebar(!sidebar);
    }
    else{alert("Please login first")}
  }

  return (
    <>
      <StyledAppBar style={scroll ? darkMode ? { backgroundColor: '#181818',boxShadow: ' rgb(163 163 163 / 15%) 1.95px 1.95px 2.6px' 
     } : { backgroundColor: '#f0f0f3', boxShadow: ' rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' } : { backgroundColor: 'transparent' }}  >
        <Toolbar>
          <LogoImage
            src={chef}
            alt="logo"
          />
          <AppName style={darkMode?{color:"#ffffff"}:{color:"black"}}>FoodApp</AppName>
          <LeftBox>
            <StyledUl>
              {darkMode ? (<><StyledLi style={{ color: "#ffffff" }}>Home</StyledLi>
                <StyledLi style={{ color: "#ffffff" }}>Menu</StyledLi>
                <StyledLi style={{ color: "#ffffff" }}>About Us</StyledLi></>) : (<><StyledLi>Home</StyledLi>
                  <StyledLi>Menu</StyledLi>
                  <StyledLi>About Us</StyledLi></>)}
              <StyledLi>
                <IconContext.Provider value={{ color: "undefined" }}>
                  <div className="navbar">
                    <Link to="#" className="menu-bars">
                      <Badge badgeContent={counter} color="primary"
                        sx={{
                          ".css-106c1u2-MuiBadge-badge": {
                            backgroundColor: 'rgb(254, 84, 0)', margin: '-4px -1px',
                            fontFamily: "'Poppins', sans-serif"
                          },
                        }}
                        style={{}}>
                        <ShoppingBasket style={
                          darkMode ? { color: "#ffffff" } : { color: 'black', margin: '-9px 0 0 13px', }
                        } onClick={showSidebar} />
                      </Badge>
                    </Link>
                  </div>
                  <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ItemBox>
                      <ArrowBack onClick={showSidebar} style={{ cursor: 'pointer' }} />
                      <Title>Cart</Title>
                      <Delete onClick={handleOnClick} />
                    </ItemBox>
                    <PrimaryBox>
                      {val === true ? <img style={{
                        height: '60vh'
                      }} src="https://lh3.googleusercontent.com/A02eP8ms8OLBl-3zpXA6rglLo7vAW8GbWhvMoRZAv6dDqOrfJLWoc903TuhSL87-SFI=w2400" alt="" /> : <SecondaryBox>
                          
                            {Object.keys(user).length !== 0 &&
                            <ContainerBox>
                              <CartItem val={user.displayName} />
                            </ContainerBox>
                            }
                        <Box1>
                          <Box3>
                            <SubHeading style={{ marginTop: '-5px' }}>Sub Total<InlineHeading>$10</InlineHeading></SubHeading>
                            <SubHeading >Delivery<InlineHeading style={{ marginLeft: '250px' }}>$10</InlineHeading></SubHeading>
                            <SubTotal>Total</SubTotal>
                          </Box3>
                          <OrderButton >Order Now</OrderButton>
                        </Box1>


                      </SecondaryBox>}



                    </PrimaryBox>
                  </nav>

                </IconContext.Provider>
              </StyledLi>
              <StyledLi>
                {Object.keys(user).length !== 0 ? (<AvatarImage
                  src={user.photoURL}
                  style={{ borderRadius: '50%' }}
                  alt="logo1"
                  onClick={handleGoogleAuth}
                />) : (<AvatarImage
                  src={avatar}
                  alt="logoAvatar"
                  onClick={handleGoogleAuth}
                />)}


              </StyledLi>
              <StyledLi>
                {darkMode ? (<LightMode
                  src={avatar}
                  alt="logoAvatar"
                  style={darkMode ? { filter: 'invert(1)' } : ""}
                  onClick={handleMode}
                />) : (<DarkMode
                  src={avatar}
                  alt="logoAvatar"
                  onClick={handleMode}
                />)}

              </StyledLi>
            </StyledUl>
          </LeftBox>
        </Toolbar>
      </StyledAppBar>
    </>
  )
}

export default Navbar