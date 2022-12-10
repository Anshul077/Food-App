import express from "express"
import {getDataItem,addItemToCart,getCartItem,updateCartItem,deleteCartItem} from "../Controller/Item.js";

const router=express.Router()

router.get('/getData', getDataItem);
router.post('/addCart', addItemToCart);
router.post('/updateCart',updateCartItem);
router.post('/deleteCart',deleteCartItem);
router.get('/getCartProduct/:user', getCartItem);

export default router