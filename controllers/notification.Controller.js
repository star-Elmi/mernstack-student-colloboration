const createNotification = async (req, res) => {
  try {
    const notif = new Notification(req.body);
    await notif.save();
    res.status(201).json(notif);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getNotifications = async (req, res) => {
  try {
    const notifs = await Notification.find({ user_id: req.params.userId });
    res.json(notifs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
const markAsRead = async (req, res) => {
  try {
    const updated = await Notification.findByIdAndUpdate(req.params.id, { is_read: true }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
    createNotification,
    getNotifications,
    markAsRead
}
