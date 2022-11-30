import express from "express"
import { Connection } from "./Connection.js"
import { ExportData } from "./constants/ExportData.js"

const app=express()

const PORT=8000

app.listen(PORT,()=>{
    console.log(`Serve running on PORT ${PORT}`)
})

Connection()
ExportData()