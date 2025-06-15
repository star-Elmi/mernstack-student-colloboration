const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const groupMemberRoutes = require('./routes/groupMemberRoutes');

const  taskRoutes = require('./routes/taskRoutes


const feedbackRoutes  = require('./routes/calendarRoutes')
const notificationRoutes = require('./routes/notification.Routes')


const  taskRoutes = require('./routes/taskRoutes


const groupRoutes = require('./routes/groupRoutes');
const taskRoutes = require('./routes/taskRoutes');

const feedbackRoutes  = require('./routes/feedback.Routes')
const notificationRoutes = require('./routes/notification.Routes')


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/users', userRoutes);
app.use('/api', groupRoutes);

app.use('/api/group-members', groupMemberRoutes);
app.use('/groups', groupMemberRoutes);
app.use('/api/tasks', taskRoutes);

app.use('/api/feedback', feedbackRoutes);
app.use('/api/notifications', notificationRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
