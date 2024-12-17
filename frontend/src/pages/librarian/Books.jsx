import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './Sidebar';
import { fetchBooks, addBook, deleteBook } from '../../redux/actions/bookActions'; // Redux actions
import BookForm from '../../components/BookForm'; // Assuming you have a form component
import {
  Container,
  SidebarContainer,
  Content
} from '../../styles/BookStyles';


const Books = () => {
  const dispatch = useDispatch();
  const booksState = useSelector((state) => state.books); // Redux state for books
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    // Dispatch the action to fetch books on component mount
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  // Check if books data is an array and handle possible loading or empty states
  const books = Array.isArray(booksState.books) ? booksState.books : [];

  return (
    <Container>
   
    <Sidebar/>
    
    <Content>
    <div className="p-4">
     
      <h1 className="text-2xl font-semibold">Books</h1>
      <button 
        onClick={() => setShowForm(!showForm)} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showForm ? 'Cancel' : 'Add New Book'}
      </button>

      {showForm && <BookForm closeForm={() => setShowForm(false)} />}
      
      <div className="mt-4">
        {booksState.loading ? (
          <p>Loading books...</p>
        ) : books.length === 0 ? (
          <p>No books available. Add a new book!</p>
        ) : (
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">
                    <button 
                      onClick={() => handleDelete(book.id)} 
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </Content>
    </Container>
  );
};

export default Books;
