const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    name : String,
    author : String,
    image_url : String,
    genre:String,
    description : String,
    likes:{
        type:Number,default:0
    },
    first_name:String,
    last_name:String,
    user_id:mongoose.Schema.Types.ObjectId
}, {
    timestamps: true
})

const usersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    books: [booksSchema],
    followers: [

        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
    following: [

        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    ],
}, {
    timestamps: true
})

const model = mongoose.model("User", usersSchema);
module.exports = model;