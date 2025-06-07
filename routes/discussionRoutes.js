// discussionRoutes.js
const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

router.post('/', discussionController.createDiscussion);
router.get('/', discussionController.getAllDiscussions);

// module.exports = router;
