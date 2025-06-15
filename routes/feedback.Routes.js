const express = require('express');
const FeedbackRouter = express.Router();
const feedbackController = require('../controllers/feedback.Controller');

FeedbackRouter.post('/', feedbackController.createFeedback);
FeedbackRouter.get('/:userId', feedbackController.getFeedbackForUser);

module.exports = FeedbackRouter;