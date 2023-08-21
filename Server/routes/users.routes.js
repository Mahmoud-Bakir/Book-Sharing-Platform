const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

router.get("/", usersController.getAllUsers)
router.get("/profile", usersController.getProfile)
router.post("/add_book", usersController.addBooks)

module.exports = router;