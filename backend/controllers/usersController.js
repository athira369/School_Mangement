import { handleValidationError } from "../middleware/errorHandler.js";
import {Admin } from "../models/adminRegisterSchema.js";
import { Student } from "../models/userSchema.js";
import { Teacher } from "../models/userSchema.js";

export const adminSignIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    
    debugger
    if (!email || !password) {

      handleValidationError("Please provide email and password", 400);
    }
    const existingAdmin = await Admin.findOne({ email });
    console.log(existingAdmin);

    if (!existingAdmin) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    debugger
    const isPasswordValid = await existingAdmin.isValidPassword(password);
    debugger

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: "Admin signed in successfully",

    });
  } catch (err) {
    debugger
    next(err);
  }
};


export const studentSignIn = async (req, res, next) => {
  console.log('sadasdasdas');
  // const { email, password } = req.body;
  // try {
  //   console.log('asdasdas');
  //   // Check if the student exists in the database
  //   const student = await Student.findOne({ email });
  //   console.log('Student found:', student); // Debugging line
  //   if (!email || !password) {
  //     handleValidationError("Please provide email and password", 400);
  //   }
  //   const existingStudent = await Student.findOne({ email });

  //   if (!existingStudent) {
  //     return res.status(401).json({ success: false, message: "Invalid email or password" });
  //   }
  //   const isPasswordValid = await existingStudent.isValidPassword(password);

  //   if (!isPasswordValid) {
  //     return res.status(401).json({ success: false, message: "Invalid email or password" });
  //   }
  //   res.status(200).json({
  //     success: true,
  //     message: "Student signed in successfully",
  //   });
  // } catch (err) {
  //   next(err);
  // }
};

export const teacherSignIn = async (req, res, next) => { 
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      handleValidationError("Please provide email and password", 400);
    }
    const existingTeacher = await Teacher.findOne({ email });

    if (!existingTeacher) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = await existingTeacher.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    res.status(200).json({
      success: true,
      message: "Teacher signed in successfully",
    });
  } catch (err) {
    next(err);
  }
};