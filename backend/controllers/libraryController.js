const LibraryRecord = require('../models/LibraryRecord');
const Student = require('../models/Student');

// Borrow a book (Create a library record)
const borrowBook = async (req, res) => {
  try {
    const { studentId, bookTitle, dueDate } = req.body;

    // Find the student by ID
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    // Create a new library record
    const libraryRecord = new LibraryRecord({
      student: student._id,
      bookTitle,
      dueDate,
    });

    await libraryRecord.save();
    res.status(201).json(libraryRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all library records (borrowed books)
const getLibraryRecords = async (req, res) => {
  try {
    const libraryRecords = await LibraryRecord.find().populate('student', 'firstName lastName');
    res.status(200).json(libraryRecords);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a specific library record by ID
const getLibraryRecordById = async (req, res) => {
  try {
    const libraryRecord = await LibraryRecord.findById(req.params.id).populate('student', 'firstName lastName');
    if (!libraryRecord) {
      return res.status(404).json({ message: 'Library record not found' });
    }
    res.status(200).json(libraryRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Return a book (Update the library record)
const returnBook = async (req, res) => {
  try {
    const { recordId, returnedOn } = req.body;

    // Find the library record
    const libraryRecord = await LibraryRecord.findById(recordId);
    if (!libraryRecord) {
      return res.status(404).json({ message: 'Library record not found' });
    }

    // Set the returnedOn date and update the status
    libraryRecord.returnedOn = returnedOn;
    libraryRecord.status = 'returned';

    // If overdue, calculate the fine (optional logic)
    if (libraryRecord.dueDate < new Date(returnedOn)) {
      const overdueDays = Math.ceil((new Date(returnedOn) - libraryRecord.dueDate) / (1000 * 3600 * 24));
      libraryRecord.fine = overdueDays * 5; // Assuming a fine of 5 units per day
    }

    await libraryRecord.save();
    res.status(200).json(libraryRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a library record (book return or cancellation)
const deleteLibraryRecord = async (req, res) => {
  try {
    const { recordId } = req.params;
    const libraryRecord = await LibraryRecord.findByIdAndDelete(recordId);
    if (!libraryRecord) {
      return res.status(404).json({ message: 'Library record not found' });
    }
    res.status(200).json({ message: 'Library record deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  borrowBook,
  getLibraryRecords,
  getLibraryRecordById,
  returnBook,
  deleteLibraryRecord,
};
