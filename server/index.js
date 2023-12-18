const express = require("express")
const bcrypt = require("bcrypt")
const cors =require("cors")
const app = express()
app.use(express.json())
app.use(cors())
const {BrandModel} =require("./model")

app.get("/",async (req,res)=>{
    res.send("server started")
})
app.get("/brands",async (req,res)=>{
    const brands =await BrandModel.find()
    res.send(brands)
})

app.listen(3001,()=>{
    console.log("http://localhost:3001")
})