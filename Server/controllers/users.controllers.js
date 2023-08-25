const User = require("../modals/users.modal")

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.send(users)
}
const getAllBooks = async (req, res)=>{
    try {
        const users = await User.find();
        const allBooks = users.reduce((books, user) => {
          return books.concat(user.books); 
        }, []);
    
        res.json(allBooks);
        console.log(allBooks)
      } catch (error) {
        console.error('Error fetching all books:', error);
        res.status(500).json({ error: 'An error occurred while fetching all books.' });
      }
}

const getUserBooks = async (req, res)=>{
    const user_Id = req.query.user_Id
    const user = await User.findById(user_Id);
    const books = user.books
    console.log(user)
    res.send(books)
}
const getProfile = async (req, res)=>{
    const user_Id = req.query.user_Id
    const user = await User.findById(user_Id)
    res.send(user)
 
}

const addBooks = async (req, res) => {
    const user_id = req.body.user_id; 
    const { name, author, image_url, description,first_name,last_name } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            user_id,
            { $push: { books: { name, author, image_url, description,first_name,last_name,user_id} } },
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
        const check1 = await User.findById(user1)
        if (check1.following.includes(user2)) return res.status(450).send("already Followed");
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
 const unfollowUser = async (req, res) => {
        const user1 = req.body.user_id;
        const user2 = req.body.follower_id;
        
        try {
          const updatedUser1 = await User.findByIdAndUpdate(
            user1,
            { $pull: { following:  user2  } },
            { new: true }
          );
          const updatedUser2 = await User.findByIdAndUpdate(
            user2,
            { $pull: { followers:   user1  } }, 
            { new: true }
          );
          
          updatedUser1.toJSON();
          updatedUser2.toJSON();
          
          res.send({
            user1: updatedUser1,
            user2: updatedUser2
          });
        } catch (error) {
          res.status(500).json({ error: 'An error occurred while unfollowing' });
        }
      };
const getFeedBooks = async (req, res) => {
        const id = req.query.user_Id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        
        const followings = user.following;
        const books = [];
        for (const followingId of followings) {
            const followingUser = await User.findById(followingId);
            if (followingUser && followingUser.books) {
                books.push(...followingUser.books);
            }
        }
    
        res.send(books);
    };

const likePost = async (req, res) => {
        const user_id = req.body.user_id; 
        const book_id = req.body.book_id;
    
        try {
            const user = await User.findById(user_id);
            const test = user.books.find(book => book._id = book_id);
            console.log(test);

            if (!test) {
                return res.status(404).json({ message: "Book not found" });
            }
            test.likes += 1;
            await user.save();
            res.json({ message: "Liked successfully", newLikesCount: test.likes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Error occurred while liking" });
        }
    };
const searchBooks = async (req, res) => {
    try {
      const { input, bookIds } = req.body;
  
      const searchQuery = { $or: [] };
  
      for (const keyword of input.split(' ')) {
        searchQuery.$or.push(
          { title: new RegExp(keyword, 'i') },
          { author: new RegExp(keyword, 'i') },
          { description: new RegExp(keyword, 'i') }
        );
      }
  
      const results = await Book.find({
        $and: [
          { _id: { $in: bookIds.map(id => mongoose.Types.ObjectId(id)) } },
          { $or: searchQuery.$or },
        ],
      });
  
      res.json(results);
    } catch (error) {
      console.error('Error searching:', error);
      res.status(500).json({ error: 'An error occurred while searching.' });
    }
      
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
module.exports = {getAllUsers, getProfile,addBooks,followUser,getFeedBooks,unfollowUser,likePost,getUserBooks,getAllBooks,searchBooks}