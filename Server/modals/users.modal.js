const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    name : String,
    author : String,
    image_url : String,
    description : String,
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
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ],
    following: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
        }
    ],
}, {
    timestamps: true
})

const model = mongoose.model("User", usersSchema);
module.exports = model;