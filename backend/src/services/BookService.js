import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1';  // Replace with your actual backend URL

// Get list of books
export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_URL}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Add a new book
export const addBook = async (bookData) => {
  try {
    const response = await axios.post(`${API_URL}/books`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error adding book:', error);
    throw error;
  }
};

// Update a book
export const updateBook = async (bookId, bookData) => {
  try {
    const response = await axios.put(`${API_URL}/books/${bookId}`, bookData);
    return response.data;
  } catch (error) {
    console.error('Error updating book:', error);
    throw error;
  }
};

// Delete a book
export const deleteBook = async (bookId) => {
  try {
    const response = await axios.delete(`${API_URL}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting book:', error);
    throw error;
  }
};
