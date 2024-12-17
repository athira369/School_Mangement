import express from "express";
import { getAllStudents, createStudent } from "../controllers/studentsController.js";
import { studentSignIn } from "../controllers/usersController.js";
const router = express.Router();
router.get('/getall', getAllStudents);
router.post('/', createStudent);
router.post('/studentsignin', studentSignIn)
export default router;

