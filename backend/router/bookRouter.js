// /backend/routes/bookRouter.js
import express from 'express';
import { getBooks, addBook, deleteBook,generateReport } from '../controllers/bookController.js';
import { getAllBooks, createBook } from "../controllers/librarianController.js";


const router = express.Router();
router.get('/getall', getAllBooks);

// Route to get all books
router.get('/', getBooks);

// Route to add a new book
router.post('/addBook', addBook);

// Route to delete a book by ID
router.delete('/:bookId', deleteBook);

// route  to generate a report
router.post('/generate-report', generateReport);

export default router;
