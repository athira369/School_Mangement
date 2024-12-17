import axios from 'axios';

// Action Types
export const FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST';
export const FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS';
export const FETCH_BOOKS_FAILURE = 'FETCH_BOOKS_FAILURE';
export const UPDATE_BOOK = 'UPDATE_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

// Action Creators
export const fetchBooks = () => async (dispatch) => {
  dispatch({ type: FETCH_BOOKS_REQUEST });
  try {
    const response = await axios.get('http://localhost:5000/api/v1/books'); // API endpoint to fetch books
    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message });
  }
};

// Update Book
export const updateBook = (bookId, updatedData) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/books/${bookId}`, updatedData);  // API call to update book
      dispatch({
        type: UPDATE_BOOK,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

export const addBook = (book) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/v1/books', book);
    dispatch({ type: ADD_BOOK, payload: response.data });
  } catch (error) {
    console.error("Error adding book:", error);
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/v1/books/${bookId}`);
    dispatch({ type: DELETE_BOOK, payload: bookId });
  } catch (error) {
    console.error("Error deleting book:", error);
  }
};
