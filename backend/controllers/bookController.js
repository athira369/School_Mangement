import Book from '../models/bookSchema.js';
import BorrowingHistory from '../models/borrowingHistorySchema.js';
import Member from '../models/memberSchema.js';
// Fetch all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
};

// Add a new book
const addBook = async (req, res) => {
  console.log("Received data:", req.body);
  const { title, author, isbn, genre,copy,category } = req.body;

  if (!title || !author || !isbn || !genre|| !copy|| !category) {
    return res.status(400).json({ message: 'Title, Author, ISBN, and Genre are required' });
  }

  try {
    const newBook = new Book({ title, author, isbn, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: 'Error adding book', error });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  const { bookId } = req.params;

  try {
    const result = await Book.findByIdAndDelete(bookId);
    if (!result) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting book', error });
  }
};

// Simulated function to generate report data
const generateReport = async (req, res) => {
  
  const { reportType, startDate, endDate } = req.body;

  if (!reportType || !startDate || !endDate) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  try {
    let reportData;
   reportData = generateReportData(reportType, startDate, endDate)
    console.log('Generated Report Data:', reportData); // Log to console
    // Fetching data based on the report type
    if (reportType === 'Books Report') {
      reportData = await Book.find();  // Fetch all books
    } else if (reportType === 'Member Report') {
      reportData = await Member.find();  // Fetch all members
    } else if (reportType === 'Borrowing History') {
      reportData = await BorrowingHistory.find({
        borrowDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
      });  // Fetch borrowing history within date range
    } else {
      throw new Error('Invalid report type');
    }

    return res.status(200).json({ report: reportData });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to generate the report.', error: error.message });
  }
};


export { getBooks, addBook, deleteBook, generateReport };
