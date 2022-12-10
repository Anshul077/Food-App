import React from 'react'
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    styled,
    Typography,
    Badge
  } from "@mui/material";
import heroBg from '../images/heroBg.png'

const ContainBox=styled(Box)`
height:100%;
width:fit-content;
padding:10px;
z-index:2;
position:relative;
top:10vh;
left:-10vw;
box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
filter: blur(10px);
`
const MainContainBox=styled(Box)`
height:100%;
width:fit-content;
display:grid;
float:right;
grid-template-columns:200px 200px;
grid-gap:100px 20px;
`


const BannerImage = () => {
  return (
    <MainContainBox>
        <img src={heroBg} style={{objectFit:"contain",height:"100%",width:"31vw",position:"absolute",zIndex:1}}/>
    <ContainBox>
    <img style={{height:"160px",position:"relative",top:"-80px"}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"160px",position:"relative",top:"-80px"}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"160px",position:"relative",top:"-80px"}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"160px",position:"relative",top:"-80px"}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    </ContainBox>
    </MainContainBox>
  )
}

export default BannerImage