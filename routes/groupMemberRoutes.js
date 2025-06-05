const express = require("express");
const router = express.Router();
const {
  addGroupMember,
  getGroupMembers,
  getAllGroupMembers,
  updateGroupMember,
  removeGroupMember
} = require("../controllers/groupMemberController");

// Add member
router.post("/", addGroupMember);

// Get members by groupId
router.get("/:groupId", getGroupMembers);

// Get all members
router.get("/", getAllGroupMembers);

// Update member
router.put("/:id", updateGroupMember);

// Delete member
router.delete("/:id", removeGroupMember);

module.exports = router;
// This code defines the routes for managing group members in an Express.js application.
// It uses the Express Router to create endpoints for adding, retrieving, updating, and deleting group members.
// The routes are linked to their respective controller functions, which handle the business logic for each operation.
// The `addGroupMember` function is used to add a new member to a group.
// The `getGroupMembers` function retrieves members of a specific group by its ID.
// The `getAllGroupMembers` function retrieves all group members without filtering by group ID.
// The `updateGroupMember` function updates a member's information by their ID.
// The `removeGroupMember` function deletes a member from the group by their ID.
// This modular approach allows for better organization of code and separation of concerns, making it easier to maintain and extend the application in the future.  
// This code sets up the routes for managing group members in a collaborative application.
// It defines endpoints for adding, retrieving, updating, and deleting group members using Express.js.
// The routes are linked to their respective controller functions, which handle the business logic for each operation.
// The `addGroupMember` function is used to add a new member to a group.

// The `getGroupMembers` function retrieves members of a specific group by its ID.
// The `getAllGroupMembers` function retrieves all group members without filtering by group ID. 
// The `updateGroupMember` function updates a member's information by their ID.
// The `removeGroupMember` function deletes a member from the group by their ID.
// This modular approach allows for better organization of code and separation of concerns, making it easier to maintain and extend the application in the future.
// The routes are exported for use in the main application file, allowing them to be integrated into the Express app.
// This code sets up the routes for managing group members in a collaborative application.
// It defines endpoints for adding, retrieving, updating, and deleting group members using Express.js.
// The routes are linked to their respective controller functions, which handle the business logic for each operation.
// The `addGroupMember` function is used to add a new member to a group.
// The `getGroupMembers` function retrieves members of a specific group by its ID.
// The `getAllGroupMembers` function retrieves all group members without filtering by group ID.

// The `updateGroupMember` function updates a member's information by their ID.
// The `removeGroupMember` function deletes a member from the group by their ID.  
// This modular approach allows for better organization of code and separation of concerns, making it easier to maintain and extend the application in the future.
// The routes are exported for use in the main application file, allowing them to be integrated into the Express app.
// The routes are defined using Express Router, which provides a clean and organized way to manage the application's endpoints.
// This code sets up the routes for managing group members in a collaborative application.
// It defines endpoints for adding, retrieving, updating, and deleting group members using Express.js.
  