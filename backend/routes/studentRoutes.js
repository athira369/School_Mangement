const express = require('express');
const router = express.Router();
const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require('../controllers/studentController'); // Importing the student controller functions
const auth = require('../middleware/auth'); // Middleware for authentication

// POST /api/students - Create a new student
router.post('/', auth(['admin', 'office_staff']), createStudent);

// GET /api/students - Get all students
router.get('/', auth(['admin', 'office_staff', 'librarian']), getStudents);

// GET /api/students/:id - Get a specific student by ID
router.get('/:id', auth(['admin', 'office_staff', 'librarian']), getStudentById);

// PUT /api/students/:id - Update a specific student by ID
router.put('/:id', auth(['admin', 'office_staff']), updateStudent);

// DELETE /api/students/:id - Delete a specific student by ID
router.delete('/:id', auth(['admin']), deleteStudent);

module.exports = router;
