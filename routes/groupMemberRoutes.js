// routes/groupMemberRoutes.js
const express = require('express');
const router = express.Router();

// GET all group members (dummy response)
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Group members endpoint working ✅' });
});

module.exports = router;
