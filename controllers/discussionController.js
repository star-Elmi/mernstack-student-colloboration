// File controller for handling discussion posts
// const DiscussionPost = require('../models/DiscussionPost');

// Create a new discussion post
exports.createDiscussion = async (req, res) => {
try {
    const post = new DiscussionPost(req.body);
    await post.save();
    res.status(201).json(post);
} catch (err) {
    res.status(400).json({ error: err.message });
}
};

// Get all discussion posts
exports.getAllDiscussions = async (req, res) => {
try {
    const posts = await DiscussionPost.find();
    res.json(posts);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};