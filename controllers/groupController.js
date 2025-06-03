// Group Controller
const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
  try {
    const { name, subject, created_by } = req.body;
    const group = new Group({ name, subject, created_by });
    await group.save();
    res.status(201).json(group);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
