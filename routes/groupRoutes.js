const express = require('express');
const router = express.Router();
const { createGroup } = require('../controllers/groupController');

router.post('/groups', createGroup);

module.exports = router;
