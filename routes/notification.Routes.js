const express = require('express');
const NotificationRouter = express.Router();
const notificationController = require('../controllers/notification.Controller');

NotificationRouter.post('/', notificationController.createNotification);
NotificationRouter.get('/:userId', notificationController.getNotifications);
NotificationRouter.put('/:id/read', notificationController.markAsRead);

module.exports = NotificationRouter;