// calendarRoutes.js
const express = require('express');
const router = express.Router();
const calendarEventController = require('../controllers/calendarEventController');
const validate = require('../validators/calendarEventValidator');
const auth = require('../middleware/auth');

router.post('/', auth, validate, calendarEventController.createEvent);
router.get('/', auth, calendarEventController.getEvents);

module.exports = router;
