// /backend/models/borrowingHistorySchema.js

import mongoose from 'mongoose';

// Define the schema for the borrowing history
const borrowingHistorySchema = new mongoose.Schema(
  {
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Member',  // Reference to the Member model
      required: true
    },
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',    // Reference to the Book model
      required: true
    },
    borrowDate: {
      type: Date,
      required: true
    },
    returnDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ['borrowed', 'returned'],  // Define borrowing status
      default: 'borrowed'
    },
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Create and export the BorrowingHistory model
const BorrowingHistory = mongoose.model('BorrowingHistory', borrowingHistorySchema);

export default BorrowingHistory;
