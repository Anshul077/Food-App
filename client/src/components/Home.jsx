import React,{useState,useEffect,createContext} from 'react'
import {
  Box,
  Button,
  styled,
  Typography,
} from "@mui/material";
import "../App.css";
import Navbar from './Navbar'
import heroBg from '../images/heroBg.png'
import b1 from '../images/b1.png'
import ItemCarousel from './ItemCarousel';
import { getItemData } from '../redux/action/ItemAction.js';
import { useSelector, useDispatch } from "react-redux";
import MultipleDishes from './MultipleDishes';
import BannerImage from './BannerImage';

export const GlobalInfo=createContext()

const MainBox = styled(Box)`
width:100%;
display:flex;
justify-content:space-between;
`
const LeftBox = styled(Box)`
word-wrap:break-word;
width:50%;
padding:0 40px;

`

const Tagline = styled(Typography)`
  font-family: 'Poppins', sans-serif;
  font-weight:600;
  font-size:70px;
  `
const ContentLine = styled(Typography)`
margin-top:20px;
  font-family: 'Poppins', sans-serif;
  font-size:15px;
  `
const OrderButton = styled(Button)`
margin-top:30px;
background-color:#ef662e;
color:#ffffff;
  font-family: 'Poppins', sans-serif;
  font-size:15px;
  &:hover{
    color:black;
    background-color:#f9a98a;
  }
  `

const TaglineSub = styled("span")(({ theme }) => ({
  fontfamily: "'Poppins', sans-serif",
  color: "#ef662e",
  fontweight: 600,
  fontSize: 70,
}))


const RightBox = styled(Box)`
width:50%;
height:100%;
`
const ImageBox = styled(Box)`
position:absolute;
top:10%;
width:40%;
display:flex;
justify-content:center;
flex-wrap:wrap;
`

const LineHeading = styled("hr")(({ theme }) => ({
  backgroundColor: 'rgb(254 84 0)',
  position: 'absolute',
  width: '7%',
  marginTop: -28,
  marginLeft: 20

}));

const Heading = styled(Typography)`
    font-size: 20px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  margin:130px 0 30px 20px;
`

const Home = () => {

  const [user,setUser]=useState({})
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode]=useState(false)

  const dispatch = useDispatch();
  const { itemData } = useSelector((state) => state.ItemData);

    useEffect(() => {
        dispatch(getItemData());
    }, [])


  return (
    <GlobalInfo.Provider value={{user,setUser,counter,setCounter,darkMode,setDarkMode}}>
      <Navbar/>
      <MainBox>
        <LeftBox>
          <Tagline style={darkMode?{color:"#ffffff"}:{color:"black"}}>
            Delicious Food To Fit<TaglineSub> Your lifestyle</TaglineSub>
          </Tagline>
          <ContentLine  style={darkMode?{color:"#ffffff"}:{color:"black"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non, rerum harum optio eveniet molestias dicta? Aliquam laboriosam blanditiis quod dignissimos provident omnis, dolorem quae exercitationem facilis cumque voluptas totam.</ContentLine>

                      <OrderButton>Order Now</OrderButton>

        </LeftBox>
        <RightBox>
          <BannerImage/>
        </RightBox>
      </MainBox>
      <Heading variant="h3" style={darkMode?{color:"#ffffff"}:{color:"black"}}>Fresh Healthy Fruits</Heading>
      <LineHeading style={{height:'5px'}}/>
      <ItemCarousel Data={itemData}/>
      <Heading variant="h3" style={darkMode?{color:"#ffffff"}:{color:"black"}}>Our Hot Dishes</Heading>
      <LineHeading style={{height:'5px'}}/>
      <MultipleDishes Data={itemData}/>
    </GlobalInfo.Provider>
  )
}

export default Home