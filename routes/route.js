const express = require("express");
const { addUser } = require("../controller/UserController");

const router = express.Router();

router.post("/add", addUser);

module.exports = router;
