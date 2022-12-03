import express from "express"
import {getDataItem,addItemToCart} from "../Controller/Item.js";

const router=express.Router()

router.get('/getData', getDataItem);
router.post('/addCart', addItemToCart);

export default router