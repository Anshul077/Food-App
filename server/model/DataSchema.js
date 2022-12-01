import mongoose from "mongoose";

const DataSchema=mongoose.Schema({
    url: {
        type: String,
    },
    name: {
        type: String,
    },
    calories: {
        type: String,
    },
    price: {
        type: String,
    },
    category: {
        type: String,
    },
   
})

const data=mongoose.model('data',DataSchema)

export default data