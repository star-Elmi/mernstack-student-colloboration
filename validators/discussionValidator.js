// ddiscussionValidator.js
const { body } = require('express-validator');

exports.validateDiscussion = [
body('title').notEmpty().withMessage('Title is required'),
body('content').notEmpty().withMessage('Content is required'),
body('author').notEmpty().withMessage('Author is required'),
];
