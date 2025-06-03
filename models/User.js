const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  full_name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  type: { type: String, enum: ['student', 'admin', 'user'], default: 'student' },
  created_at: { type: Date, default: Date.now }
});
 

module.exports = mongoose.model('User', userSchema);
