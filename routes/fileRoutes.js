// fileRoutes.js
const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');

router.post('/', fileController.uploadFile);
router.get('/', fileController.getAllFiles);

module.exports = router;
