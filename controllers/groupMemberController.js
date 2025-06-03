const GroupMember = require("../models/GroupMember");

// Add a new member
exports.addGroupMember = async (req, res) => {
  try {
    const member = new GroupMember(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get members by groupId
exports.getGroupMembers = async (req, res) => {
  try {
    const members = await GroupMember.find({ group_id: req.params.groupId })
      .populate("user_id", "full_name email");
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all members (no group filter)
exports.getAllGroupMembers = async (req, res) => {
  try {
    const members = await GroupMember.find().populate("user_id", "full_name email");
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a group member by ID
exports.updateGroupMember = async (req, res) => {
  try {
    const member = await GroupMember.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!member) return res.status(404).json({ error: "Member not found" });
    res.status(200).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Remove a member
exports.removeGroupMember = async (req, res) => {
  try {
    const removed = await GroupMember.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: "Member not found" });
    res.status(200).json({ message: "Member removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
