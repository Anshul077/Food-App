import mongoose from "mongoose"

export const Connection=async(URL)=>{
    try{

        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected!!")
    }
    catch{
        console.log("Database not connected!!")
    }
}