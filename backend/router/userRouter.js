import express from "express";
import { studentSignIn, teacherSignIn ,adminSignIn} from "../controllers/usersController.js";
const router = express.Router();



console.log("dsfdsfsdfsdfdsf");

router.post('/student', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
 router.post('/admin/signin', adminSignIn);

export default router;
 