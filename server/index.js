import express from "express"
import { Connection } from "./Connection.js"
import { ExportData } from "./constants/ExportData.js"
import dotenv from 'dotenv'

dotenv.config()

const app=express()

const PORT=8000

const URL=process.env.URL
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

app.listen(PORT,()=>{
    console.log(`Serve running on PORT ${PORT}`)
})

Connection(URL)
ExportData()