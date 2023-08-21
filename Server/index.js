
const db_url = "mongodb+srv://mahmoudbakir21:password123321@cluster0.2mmmkct.mongodb.net/?retryWrites=true&w=majority"

const express = require("express");
const app = express();
const mongoose = require("mongoose")

const connectionsParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}

mongoose 
.connect(db_url , connectionsParams)
.then(()=>{
    console.info("connected")
})
.catch((err)=>{
    console.log("Error",err)
})


app.listen(8000, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("server running on port: ", 8000)
    mongoose.connect
})

