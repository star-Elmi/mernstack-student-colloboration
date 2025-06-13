const Feedback = require('../models/Feedback.schema')

exports.createFeedback = async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getFeedbackForUser = async (req, res) => {
  try {
    const feedbacks = await Feedback.find({ to_user_id: req.params.userId }).populate('from_user_id group_id');
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    createFeedback,
    getFeedbackForUser
}