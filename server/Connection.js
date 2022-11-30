import mongoose from "mongoose"

export const Connection=async()=>{
    try{

        await mongoose.connect("mongodb+srv://user:12345@foodappcluster.pmo750z.mongodb.net/?retryWrites=true&w=majority",{ useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected!!")
    }
    catch{
        console.log("Database not connected!!")
    }
}