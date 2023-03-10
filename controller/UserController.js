const User = require("../model/UserModel");

exports.addUser = async (req, res) => {
  const user = req.body;

  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  console.log(req.params._id);
  try {
    const user = await User.findById(req.params._id);
    res.status(200).json(user);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
