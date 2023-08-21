const User = require("../modals/users.modal")

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.send(users)
}

const getProfile = async (req, res)=>{
    const user = await User.findById(req.user._id)
    res.send(user)
}

const addBooks = async (req, res) => {
    const user_Id = req.body.user_Id; 
    const { name, author, image_url, description } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            user_Id,
            { $push: { books: { name, author, image_url, description } } },
            { new: true }
        );

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the book.' });
    }
};

module.exports = {getAllUsers, getProfile,addBooks}