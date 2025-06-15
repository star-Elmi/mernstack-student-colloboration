// calendarController.js
const CalendarEvent = require('../models/CalendarEvent');

exports.createEvent = async (req, res) => {
  try {
    const event = new CalendarEvent({ ...req.body, createdBy: req.user.id });
    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
/////

exports.getEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find({ createdBy: req.user.id });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
