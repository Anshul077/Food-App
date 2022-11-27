import React from 'react'
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


  const ItemDet = styled(Typography)`
  font-size:13px;
  color:#ffffff;
  font-family: 'Poppins', sans-serif;
  `;

  const ItemDetails = styled(Box)`
width:50%;
margin:0 10px 0 20px;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:center;
`;

  const ItemQuant = styled(Box)`
width:30%;
display:flex;
justify-content:space-evenly;
align-items:center;

`;

const CartItem = () => {
  return (
    <>
    <img style={{height: '35px', width: '45px'}} src="https://lh4.googleusercontent.com/3JGm7Z0eebL0k581aonAs7SpN8WxR1E_93eOQX_zyHY98DUB5AGE6n-WQpi1gYqToDc=w2400" />
    <ItemDetails>
        <ItemDet>Chicken Kebab Plate</ItemDet>
        <ItemDet>$20</ItemDet>
    </ItemDetails>
    <ItemQuant >
        <ItemDet>-</ItemDet>
        <ItemDet>1</ItemDet>
        <ItemDet>+</ItemDet>
    </ItemQuant>
    </>
  )
}

export default CartItem