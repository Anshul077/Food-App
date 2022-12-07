import express from "express"
import {getDataItem,addItemToCart,getCartItem,updateCartItem} from "../Controller/Item.js";

const router=express.Router()

router.get('/getData', getDataItem);
router.post('/addCart', addItemToCart);
router.post('/updateCart',updateCartItem);
router.get('/getCartProduct/:user', getCartItem);

export default router