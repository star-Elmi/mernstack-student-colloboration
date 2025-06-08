// messageController.js
const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
  try {
    const message = new Message({ ...req.body, sender: req.user.id });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getInbox = async (req, res) => {
  try {
    const inbox = await Message.find({ recipient: req.user.id }).populate('sender', 'username');
    res.json(inbox);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
