const express = require("express")
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require("path")
const mongooseConnect = require("./configs/mongoDB.connect");
const app = express();

app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "20mb" }));

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };

app.use(cors(corsOptions));
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

