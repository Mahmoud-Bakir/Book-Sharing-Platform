const express = require("express")
const path = require("path")
const mongooseConnect = require("./configs/mongoDB.connect");
const app = express();
app.use(express.json())

app.use(express.static(path.join(__dirname, "./public")));

require("dotenv").config()

const authMiddleware = require("./middlewares/auth.middleware");

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)

const usersRouter = require("./routes/users.routes");
app.use("/users", authMiddleware, usersRouter)

app.listen(8000, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("server running on port: ", 8000)
    mongooseConnect()
})

