const express = require("express");
const userController = require("../controller/UserController");

const router = express.Router();

router.post("/add", userController.addUser);
router.get("/users-list", userController.getUsers);
router.get("/edit/:_id", userController.getUser);

module.exports = router;
