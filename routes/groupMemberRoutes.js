 
 const express = require("express");
const router = express.Router();
const {
  addGroupMember,
  getGroupMembers,
  removeGroupMember
} = require("../controllers/groupMemberController");

router.post("/", addGroupMember);
router.get("/:groupId", getGroupMembers);
router.delete("/:id", removeGroupMember);

module.exports = router;
// This code defines the routes for managing group members in an Express application.