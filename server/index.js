import express from "express"
import cors from "cors"
import { Connection } from "./Connection.js"
import { ExportData } from "./constants/ExportData.js"
import dotenv from 'dotenv'
import Routes from "./routes/Routes.js"
import bodyParser from 'body-parser';

dotenv.config()

const app=express()

const PORT=8000
app.use(cors());
const URL=process.env.URL
// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

app.listen(PORT,()=>{
    console.log(`Serve running on PORT ${PORT}`)
})
Connection(URL)
ExportData()
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',Routes)