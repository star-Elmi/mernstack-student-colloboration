// Group Controller
const User = require('../models/User');
const bcrypt = require('bcryptjs');


exports.registerUser = async (req, res) => {
  try {
    const { full_name, email, password, type } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ full_name, email, password: hashedPassword, type });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};



// get all users

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



