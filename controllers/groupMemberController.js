const GroupMember = require("../models/GroupMember");

exports.addGroupMember = async (req, res) => {
  try {
    const member = new GroupMember(req.body);
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGroupMembers = async (req, res) => {
  try {
    const members = await GroupMember.find({ group_id: req.params.groupId })
      .populate("user_id", "full_name email");
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.removeGroupMember = async (req, res) => {
  try {
    const removed = await GroupMember.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ error: "Member not found" });
    res.status(200).json({ message: "Member removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
