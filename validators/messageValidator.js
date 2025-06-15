// messageValidator.js
module.exports = (req, res, next) => {
  const { recipient, content } = req.body;
  if (!recipient || !content) {
    return res.status(400).json({ error: 'Recipient and message content are required.' });
  }
  next();
};
