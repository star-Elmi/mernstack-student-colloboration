const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
  from_user_id: {
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'User',
     required: true 
  },

  to_user_id: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  },
  group_id: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group', 
    required: true 
  },
  rating: {
     type: Number,
     required: true 
  },
  comments: { 
    type: String 
  },
  submitted_at: { 
    type: Date, 
    default: Date.now 
  }

})
const Feedback = mongoose.model('Feedback', FeedbackSchema);
module.exports = Feedback;
