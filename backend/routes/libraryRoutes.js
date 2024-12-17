const express = require('express');
const router = express.Router();
const {
  borrowBook,
  getLibraryRecords,
  getLibraryRecordById,
  returnBook,
  deleteLibraryRecord,
} = require('../controllers/libraryController'); // Importing the library controller functions
const auth = require('../middleware/auth'); // Middleware for authentication

// POST /api/library/borrow - Borrow a book
router.post('/borrow', auth(['admin', 'office_staff', 'librarian']), borrowBook);

// GET /api/library - Get all library records
router.get('/', auth(['admin', 'office_staff', 'librarian']), getLibraryRecords);

// GET /api/library/:id - Get a specific library record by ID
router.get('/:id', auth(['admin', 'office_staff', 'librarian']), getLibraryRecordById);

// PUT /api/library/return - Return a borrowed book
router.put('/return', auth(['admin', 'office_staff', 'librarian']), returnBook);

// DELETE /api/library/:id - Delete a library record (delete a record or cancel)
router.delete('/:id', auth(['admin']), deleteLibraryRecord);

module.exports = router;
