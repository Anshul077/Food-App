import mongoose from "mongoose";

const CartSchema=mongoose.Schema({
    username: {
        type: String,
    },
    url: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    qty: {
        type: Number,
    },
   
})

const cart=mongoose.model('cart',CartSchema)

export default cart