import data from "../model/DataSchema.js";
import { ItemData } from "./Data.js";

export const ExportData=async()=>{
    try {
        await data.deleteMany({})
        await data.insertMany(ItemData)
        console.log("data imported")
    } catch (error) {
        console.log("data not imported")
        
    }
}