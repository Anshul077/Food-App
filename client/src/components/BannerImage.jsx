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
background-color: #ffffff73;
border-radius:13px;
box-shadow: inset 0 0 0 3000px rgba(150, 150, 150, 0.192);
backdrop-filter: blur(10px);
`
const MainContainBox=styled(Box)`
height:90%;
margin:30px 20px;
width:fit-content;
display:grid;
float:right;
grid-template-columns:200px 200px;
grid-gap:100px 10px;
`


const BannerImage = () => {
  return (
    <MainContainBox>
        <img src={heroBg} style={{objectFit:"contain",height:"90%",width:"31vw",position:"absolute",zIndex:1}}/>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3"}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3"}} src="https://lh6.googleusercontent.com/gHQJUopNhbsg-pXVA7lFWgEuRKSyy-5ELqYbpmmmgwcxpPHZx-NSu50nq1JNnE5_AAY=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3"}} src="https://lh4.googleusercontent.com/PgeUp3b8VA2G57EfQbonblzuduYcF6mlBrBYoWM-F9MmN50Dvo1NjYsEOVwEVwdoaZM=w2400" alt="images"/>
    </ContainBox>
    <ContainBox>
    <img style={{height:"125px",position:"relative",top:"-80px",zIndex:"3"}} src="https://lh5.googleusercontent.com/dOo0d_Mzd59HLFvt_sm9cKmYoCq215h5uNbAHDRwPByjieBg51mNwFMWvDoeyrr86a4=w2400" alt="images"/>
    </ContainBox>
    </MainContainBox>
  )
}

export default BannerImage