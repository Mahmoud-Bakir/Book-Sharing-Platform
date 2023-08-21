const db_url = "mongodb+srv://mahmoudbakir21:password123321@cluster0.2mmmkct.mongodb.net/?retryWrites=true&w=majority"
const mongoose = require("mongoose")
const connectionsParams = {
    useNewUrlParser:true,
    useUnifiedTopology:true
}
const mongooseConnect = ()=>{ 
mongoose.connect(db_url , connectionsParams)
.then(()=>{
    console.info("connected")
})
.catch((err)=>{
    console.log("Error",err)
})
}

module.exports = mongooseConnect