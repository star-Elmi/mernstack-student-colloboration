const express = require('express');
const router = express.Router();
const {
  createSession,
  getUserSessions,
  updateSession,
  deleteSession
} = require('../controllers/pomodoroController');

// CRUD endpoints
router.post('/', createSession);
router.get('/:user_id', getUserSessions);
router.put('/:id', updateSession);
router.delete('/:id', deleteSession);

module.exports = router;
