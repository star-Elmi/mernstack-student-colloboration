const User = require('../models/User');
const bcrypt = require('bcrypt');

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

