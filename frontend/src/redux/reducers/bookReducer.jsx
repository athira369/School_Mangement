import {
    FETCH_BOOKS_REQUEST,
    FETCH_BOOKS_SUCCESS,
    FETCH_BOOKS_FAILURE,
    ADD_BOOK,
    DELETE_BOOK,
  } from '../actions/bookActions';
  
  const initialState = {
    books: [],
    loading: false,
    error: null,
  };
  
  const bookReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUEST:
        return { ...state, loading: true };
      case FETCH_BOOKS_SUCCESS:
        return { ...state, loading: false, books: action.payload };
      case FETCH_BOOKS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case ADD_BOOK:
        return { ...state, books: [...state.books, action.payload] };
      case DELETE_BOOK:
        return {
          ...state,
          books: state.books.filter((book) => book.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default bookReducer;
  