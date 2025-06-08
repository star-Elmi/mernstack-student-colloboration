module.exports = (req, res, next) => {
  const { title, start, end } = req.body;
  if (!title || !start || !end) {
    return res.status(400).json({ error: 'Title, start, and end time are required.' });
  }
  next();
};
