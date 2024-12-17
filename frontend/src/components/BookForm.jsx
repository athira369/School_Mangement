import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../redux/actions/bookActions'; // Adjust based on your action imports

const BookForm = ({ book, isEditMode }) => {
  const dispatch = useDispatch();

  // Local state for form fields
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [category, setCategory] = useState('');
  const [copy,setCopy]=useState('');

  // Initialize form with book data if in edit mode
  useEffect(() => {
    if (isEditMode && book) {
      setTitle(book.title);
      setAuthor(book.author);
      setIsbn(book.isbn);
      setCategory(book.category);
      setCopy(book.copy);
    }
  }, [isEditMode, book]);

  // Handle form submit for adding a new book
  const handleSubmit = (e) => {
    debugger
    e.preventDefault();

    const bookData = { title, author, isbn, category,copy };

    if (isEditMode) {
      // If in edit mode, dispatch the updateBook action
      dispatch(updateBook(book.id, bookData));
    } else {
      // If not in edit mode, dispatch the addBook action
      dispatch(addBook(bookData));
    }

    // Clear form after submission (optional)
    setTitle('');
    setAuthor('');
    setIsbn('');
    setCategory('');
    setCopy('');
  };

  return (
    <div className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">{isEditMode ? 'Edit Book' : 'Add Book'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">ISBN</label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        {/* Copies Field */}
      <div className="mb-4">
        <label htmlFor="copy" className="block text-sm font-medium text-gray-700">
          Copy
        </label>
        <input
          type="number"
          id="copies"
          placeholder="Enter the number of copy"
          value={copy}
          onChange={(e) => setCopy( e.target.value )}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
      </div>


        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {isEditMode ? 'Update Book' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
