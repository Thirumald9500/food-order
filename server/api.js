const express = require('express')
const app = express()
const port = 7001
const router =require("./route")

// const approuteing = require('./routeing')
app.use("/",router)
app.listen( port ,()=>{
    console.log("server is runing on port number",port)
})