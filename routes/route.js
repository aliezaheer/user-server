const express = require("express");
const userController = require("../controller/UserController");

const router = express.Router();

router.post("/add", userController.addUser);

module.exports = router;
