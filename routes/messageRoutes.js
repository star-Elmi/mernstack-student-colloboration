// messageRoutes.js
const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const validate = require('../validators/messageValidator');
const auth = require('../middleware/auth');

router.post('/', auth, validate, messageController.sendMessage);
router.get('/inbox', auth, messageController.getInbox);

module.exports = router;
