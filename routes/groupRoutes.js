const express = require('express');
const router = express.Router();
const {
  createGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
  deleteGroup
} = require('../controllers/groupController');
const { groupValidator } = require('../validators/groupValidator');
const validate = require('../middlewares/validate');

//CREATE
router.post('/groups', validate(groupValidator), createGroup);

//READ
router.get('/groups', getAllGroups);         // Get all groups
router.get('/groups/:id', getGroupById);     // Get single group by ID

//UPDATE
router.put('/groups/:id', validate(groupValidator), updateGroup);// Update group by ID

//DELETE
router.delete('/groups/:id', deleteGroup);   // Delete group by ID

module.exports = router;
