const mongoose = require('mongoose');

const libraryRecordSchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student',  // Reference to the Student model
    required: true 
  },
  bookTitle: { 
    type: String, 
    required: true 
  },
  borrowedOn: { 
    type: Date, 
    default: Date.now  // Defaults to the current date when the record is created
  },
  dueDate: { 
    type: Date, 
    required: true 
  },
  returnedOn: { 
    type: Date, 
    default: null  // Initially null, it will be updated when the book is returned
  },
  status: { 
    type: String, 
    enum: ['borrowed', 'returned', 'overdue'], 
    default: 'borrowed' 
  },
  fine: { 
    type: Number, 
    default: 0 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Optional: Virtual field to calculate if the book is overdue
libraryRecordSchema.virtual('isOverdue').get(function() {
  return this.status === 'borrowed' && this.dueDate < Date.now();
});

module.exports = mongoose.model('LibraryRecord', libraryRecordSchema);
