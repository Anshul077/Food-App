import React,{useEffect,useContext } from 'react'
import { GlobalInfo } from './Home';
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
  import { updateCartQty,incCartQty } from '../service.js';
  import { getCartData } from '../redux/action/ItemAction.js';
  import { useSelector, useDispatch } from "react-redux";

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

  const ItemBox = styled(Box)`
  width: 100%;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
`;

  const ItemQuant = styled(Box)`
width:30%;
display:flex;
justify-content:space-evenly;
align-items:center;

`;

const CartItem = ({val}) => {

  const dispatch = useDispatch();
  const  {cartData}= useSelector((state) => state.CartData);
 
  const decrementItem=async (qty,name,user)=>{
    console.log("clicked")
    await updateCartQty({itemName:name,itemQty:qty,username:user})
  }
  
  const incrementItem=async (qty,name,user)=>{
    console.log("clicked")
    await incCartQty({itemName:name,itemQty:qty,username:user})
  }
  
  
  useEffect(() => {
    dispatch(getCartData(Object.keys(val).length !== 0?val.replaceAll(' ', ''):''))
}, [dispatch,cartData])


  return (
    <>
    {
      cartData!==undefined?cartData.map((item)=>(
        <ItemBox>
        <img style={{height: '35px', width: '45px'}} src={item.url}/>
        <ItemDetails>
            <ItemDet>{item.name}</ItemDet>
            <ItemDet>${item.price}</ItemDet>
        </ItemDetails>
        <ItemQuant >
            <ItemDet style={{cursor:'pointer'}} onClick={()=>decrementItem(item.qty,item.name,Object.keys(val).length !== 0?val.replaceAll(' ', ''):'')}>-</ItemDet>
            <ItemDet>{item.qty}</ItemDet>
            <ItemDet style={{cursor:'pointer'} } onClick={()=>incrementItem(item.qty,item.name,Object.keys(val).length !== 0?val.replaceAll(' ', ''):'')}>+</ItemDet>
        </ItemQuant>
            </ItemBox>
      )):""
    }
    </>
  )
}

export default CartItem