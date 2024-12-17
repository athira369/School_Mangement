import mongoose from 'mongoose';

// Define the schema for the Book model
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true, required: true },  // ISBN field (unique and required)
  genre: { type: String, required: true },  // Genre field
  category: { type: String, required: true },  // Category field (newly added)
  publishedDate: { type: Date, default: Date.now },  // Date the book was published
  copies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Copy',  // Reference to the Copy model
  }]
});

// Update the `updatedAt` field automatically when the book is updated
bookSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Create a model using the schema
const Book = mongoose.model('Book', bookSchema);

export default Book;
