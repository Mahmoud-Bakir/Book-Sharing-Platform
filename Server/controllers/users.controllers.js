const User = require("../modals/users.modal")

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.send(users)
}

const getProfile = async (req, res)=>{
    console.log(req.body)
    const user = await User.findById(req.body.id)
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
        const {password, ...userInfo} = updatedUser.toJSON();
        res.send({
            user: userInfo
        })
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the book.' });
    }
};
const followUser = async(req,res) => {
        const user1 = req.body.user_id
        const user2 = req.body.follower_id
        console
        try {
            const updatedUser1 = await User.findByIdAndUpdate(
                user1,
                { $push: { following: { _id:user2 } } },
                { new: true }
            );
            const updatedUser2 = await User.findByIdAndUpdate(
                user2,
                { $push: { followers: { _id:user1  } } },
                { new: true }
            );
             updatedUser1.toJSON();
             updatedUser2.toJSON();
            res.send({
                user1: updatedUser1,
                user2: updatedUser2
            })
            
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while following' });
        }
    }

// const getFollowers = async (req,res) => {
//     const user_Id = req.body.user_Id; 
//     const user = await User.findById(user_Id)
//      if (!user) {
//             return res.status(404).json({ error: 'User not found.' });
//         }

//      const followers = user.followers.map(follower => {
//         return {
//               userId: follower.user._id,
//             };
//         });
// }

module.exports = {getAllUsers, getProfile,addBooks,followUser}