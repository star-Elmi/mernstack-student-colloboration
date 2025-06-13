const NotificationSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  type: {
    type: String,
    enum: ['task_due', 'new_message', 'group_invite', 'event_reminder'],
    required: true
  },

  message: { 
    type: String, 
    required: true 
  },

  is_read: { 
    type: Boolean, 
    default: false 
  },

  created_at: { 
    type: Date, 
    default: Date.now 
  }

});
const Notification = mongoose.model("Notification", NotificationSchema);

module.exports = Notification;
