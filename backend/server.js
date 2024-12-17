import express from "express";
import {config} from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors";
import {connectDB} from "./config/database.js";
import studentRouter from "./router/studentRouter.js";
import teacherRouter from "./router/teacherRouter.js";
import assignmentRouter from "./router/assignmentRouter.js";

import announcementRouter from "./router/annoucementRouter.js";
import classRouter from "./router/classRouter.js";
import libraryRouter from "./router/libraryRouter.js";
import eventsRouter from "./router/eventsRouter.js";
import examRouter from "./router/examRouter.js";
import attendanceRouter from "./router/attendanceRouter.js";
import userRouter from "./router/userRouter.js"
import adminRegisterRouter from "./router/adminRegisterRouter.js";
import bookRouter from "./router/bookRouter.js";
import  { errorHandler } from "./middleware/errorHandler.js";
import auth from '../backend/middleware/auth.js';
import roleCheck from './middleware/roleCheck.js';
import StaffRegisterRouter from "./router/staffRegisterRouter.js";
// Load environment variables
config();


const app = express();
// Middleware
app.use(bodyParser.json());
// config({path: "dotenv"});
 
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies or authentication headers
  })
);
app.options('*', cors());  // Handle preflight requests for all routes


app.use((err, req, res, next) => {
    errorHandler(err, req, res, next);
  });
 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/v1/students", studentRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/assignments", assignmentRouter);

app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/attendance", attendanceRouter);


// Use the bookRouter for the '/api/books' endpoint
app.use('/api/v1/books', bookRouter);






// Mount the staff routes
app.use('/api/v1/staff', StaffRegisterRouter);




// Register your auth routes
app.use('/api/v1/auth', studentRouter);  // Make sure this is correct
 app.use("/api/v1/admin", userRouter); 
// app.use("/api/v1//library/getall", userRouter);
app.use("/api/v1/register", adminRegisterRouter);
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


// Connect Database
connectDB();
 
export default app;