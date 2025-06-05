const mongoose = require("mongoose");

const groupMemberSchema = new mongoose.Schema({
  groupId: {
    // type: mongoose.Schema.Types.ObjectId,
    ref: "Group",
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  role: {
    type: String,
    enum: ["member", "admin"],
    default: "member"
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

const GroupMember = mongoose.model("GroupMember", groupMemberSchema);

module.exports = GroupMember;
// This model defines the structure for group members in a MongoDB database using Mongoose.
// It includes fields for group ID, user ID, role, and the date the member joined.
// The `groupId` and `userId` fields reference the `Group` and `User` models, respectively.
// The `role` field indicates whether the member is a regular member or an admin, with a default value of "member".
// The `joinedAt` field records the date and time when the member joined the group, defaulting to the current date and time.
// The model is exported for use in other parts of the application, such as controllers and routes.
// This code defines a Mongoose schema and model for managing group members in a MongoDB database.
// It establishes relationships with the Group and User models, allowing for efficient querying and management of group membership data.
// The schema includes fields for group ID, user ID, role, and the date the member joined.
// The `GroupMember` model can be used to perform CRUD operations on group members, such as adding new members, retrieving member lists, updating member roles, and removing members from groups.