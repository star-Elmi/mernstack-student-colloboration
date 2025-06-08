// user routes.js
const express = require('express');
const router = express.Router();
const {
  registerUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');
const { registerValidator} = require('../validators/userValidator');
const validate = require('../middlewares/validate');

//CREATE
router.post('/register',validate(registerValidator),registerUser);

//READ
router.get('/', getAllUsers);          // Get all users
router.get('/:id', getUserById);       // Get single user by ID

//UPDATE
router.put('/:id', updateUser);        // Update user by ID

//DELETE
router.delete('/:id', deleteUser);     // Delete user by ID



module.exports = router;
