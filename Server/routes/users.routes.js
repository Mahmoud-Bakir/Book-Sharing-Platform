const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

router.get("/display_users", usersController.getAllUsers)
router.get("/profile", usersController.getProfile)
router.post("/add_book", usersController.addBooks)
router.post("/follow", usersController.followUser)
router.post("/unfollow", usersController.unfollowUser)
router.post("/like", usersController.likePost)
router.get("/feed_books", usersController.getFeedBooks)


module.exports = router;