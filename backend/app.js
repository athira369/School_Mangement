const express = require("express");
const bodyParser = require(" bodyParser");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();
// const userRoutes = require('./routes/userRoutes'); // Correct path to your route file
// const studentRoutes = require('./routes/studentRoutes');
const auth = require('../backend/middleware/auth');
const roleCheck = require('./middleware/roleCheck');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect Database
connectDB();
// Routes
// app.use('/api/users', userRoutes);

// app.use('/api/students', studentRoutes);
// Routes
app.use('/api/students', require('./routes/studentRoutes')); // Student routes
app.use('/api/users', require('./routes/userRoutes'));       // User routes
app.use('/api/fees', require('./routes/feesRoutes'));        // Fees routes
app.use('/api/library', require('./routes/libraryRoutes')); 

// Protected Endpoint
app.get('/api/protected-endpoint', auth(['admin']), (req, res) => {

    res.json({ message: 'You have access to this protected endpoint' });
});
// Routes
app.get("/", (req, res) => res.send("API is running..."));

// Sample Routes
app.get('/admin-only', roleCheck(['admin']), (req, res) => {
    res.json({ message: 'Welcome, admin!' });
  });

  // Centralized error handler
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
