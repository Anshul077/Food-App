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

const ContainBox=styled(Box)`
background-color:red;
height:100%;
width:fit-content;
padding:10px;
`
const MainContainBox=styled(Box)`
background-color:blue;
height:100%;
width:fit-content;
padding:10px;
display:grid;
grid-template-columns:200px 200px;
grid-gap:20px;
`


const BannerImage = () => {
  return (
    <MainContainBox>
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