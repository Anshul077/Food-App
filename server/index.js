import express from "express"

const app=express()

const PORT=8000

app.listen(PORT,()=>{
    console.log(`Serve running on PORT ${PORT}`)
})