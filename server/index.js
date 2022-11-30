import express from "express"
import { Connection } from "./Connection.js"

const app=express()

const PORT=8000

app.listen(PORT,()=>{
    console.log(`Serve running on PORT ${PORT}`)
})

Connection()