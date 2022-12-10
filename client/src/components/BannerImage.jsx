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
height:180px;
width:fit-content;
padding:10px;
z-index:2;
position:relative;
top:10vh;
left:-5vw;
background-color: #ffffff73;
border-radius:23px;
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
grid-gap:100px 5px;
`
const DetailsItem=styled(Box)`
height:auto;
display:flex;
align-items:center;
flex-direction:column;
position:relative;
width:fit-content;
top:-65px;
`


const BannerImage = () => {
  return (
    <MainContainBox>
        <img src={heroBg} style={{objectFit:"contain",height:"90%",width:"31vw",position:"absolute",zIndex:1}}/>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3",display:'block',margin:'auto'}} src="https://lh6.googleusercontent.com/F9wUCBnxawMk0D3uHEYOeh3QnRxMydAKKSVci2prethn0ZI3tQkaXAlgXqD3omOrdCY=w2400" alt="images"/>
    <DetailsItem>
    <Typography>Icecream</Typography>
    <Typography>Chocolate & Vanilla</Typography>
    <Typography>$ 5.25</Typography>
    </DetailsItem>
    </ContainBox>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3",display:'block',margin:'auto'}} src="https://lh6.googleusercontent.com/gHQJUopNhbsg-pXVA7lFWgEuRKSyy-5ELqYbpmmmgwcxpPHZx-NSu50nq1JNnE5_AAY=w2400" alt="images"/>
    <DetailsItem>
    <Typography>Icecream</Typography>
    <Typography>Chocolate & Vanilla</Typography>
    <Typography>$ 5.25</Typography>
    </DetailsItem>
    </ContainBox>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3",display:'block',margin:'auto'}} src="https://lh4.googleusercontent.com/PgeUp3b8VA2G57EfQbonblzuduYcF6mlBrBYoWM-F9MmN50Dvo1NjYsEOVwEVwdoaZM=w2400" alt="images"/>
    <DetailsItem>
    <Typography>Icecream</Typography>
    <Typography>Chocolate & Vanilla</Typography>
    <Typography>$ 5.25</Typography>
    </DetailsItem>
    </ContainBox>
    <ContainBox>
    <img style={{height:"130px",position:"relative",top:"-80px",zIndex:"3",display:'block',margin:'auto'}} src="https://lh6.googleusercontent.com/Q56ny8R3F2O-GNKIWcg6lJxbMSg1OIMgh1luynoCSUzarQACA0T0nOUV2JPbErcUpok=w2400" alt="images"/>
    <DetailsItem>
    <Typography>Icecream</Typography>
    <Typography>Chocolate & Vanilla</Typography>
    <Typography>$ 5.25</Typography>
    </DetailsItem>
    </ContainBox>
    </MainContainBox>
  )
}

export default BannerImage