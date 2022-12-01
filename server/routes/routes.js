import express from "express"
import {getDataItem} from "../Controller/Item.js";

const router=express.Router()

router.get('/getData', getDataItem);

export default router