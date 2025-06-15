const express = require('express');
const router = express.Router();

const {
  createMetric,
  getUserMetrics,
  updateMetric,
  deleteMetric
} = require('../controllers/metricController');

// CRUD Routes
router.post('/', createMetric);
router.get('/:user_id', getUserMetrics);
router.put('/:id', updateMetric);
router.delete('/:id', deleteMetric);

module.exports = router;
