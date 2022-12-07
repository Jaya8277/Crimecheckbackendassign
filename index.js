require("dotenv").config()
const express = require('express')
// const mongoose = require('mongoose');
const connection = require("./config.js");
const app = express();
const userPost = require('./model/userpost.js');
const cors = require('cors');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.get("/", (req,res)=> {
    res.send("Home Page");
})
app.post("/createpost", async(req,res)=> {
    const {username,post} = req.body;
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    var dateTime = date+' '+time;
    
    const data = await userPost.create({
        username,
        post,
        createdtime: dateTime
    })
    return res.status(200).json(data)
})
app.get("/data", async(req,res)=> {
    try{
        const data= await userPost.find({})
        return res.status(200).json(data)
    }catch(err) {
        console.log(err);
    }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, (connection)=>  {
    try{
        connection
        console.log("database connect")
    }catch(err){
        console.log(err)
    }
    console.log("successfully server running on 8080 hahahahaha");
})