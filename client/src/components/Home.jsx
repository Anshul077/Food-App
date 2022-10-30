import React from 'react'
import {
  Box,
  Button,
  styled,
  Typography,
} from "@mui/material";
import Navbar from './Navbar'
import heroBg from '../images/heroBg.png'
import b1 from '../images/b1.png'
import ItemCarousel from './ItemCarousel';

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

const Home = () => {
  return (
    <>
      <Navbar />
      <MainBox>
        <LeftBox>
          <Tagline>
            Delicious Food To Fit<TaglineSub> Your lifestyle</TaglineSub>
          </Tagline>
          <ContentLine>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non, rerum harum optio eveniet molestias dicta? Aliquam laboriosam blanditiis quod dignissimos provident omnis, dolorem quae exercitationem facilis cumque voluptas totam.</ContentLine>
          <OrderButton>Order Now</OrderButton>
        </LeftBox>
        <RightBox>
          <ImageBox>
            <img src={b1} alt="" style={{ height: 600, marginTop: '-10%' }} />
          </ImageBox>
          <img src={heroBg} style={{ height: '300px', width: '400px', float: 'right', marginRight: '10%', marginTop: '10%' }} alt="" />
        </RightBox>
      </MainBox>
      <ItemCarousel/>
    </>
  )
}

export default Home