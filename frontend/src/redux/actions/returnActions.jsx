import axios from 'axios';

// Action Types
export const FETCH_RETURNS_REQUEST = 'FETCH_RETURNS_REQUEST';
export const FETCH_RETURNS_SUCCESS = 'FETCH_RETURNS_SUCCESS';
export const FETCH_RETURNS_FAILURE = 'FETCH_RETURNS_FAILURE';
export const MARK_RETURNED = 'MARK_RETURNED';

// Action Creators
// Fetch all return requests (books that need to be returned)
export const fetchReturns = () => async (dispatch) => {
  dispatch({ type: FETCH_RETURNS_REQUEST });
  try {
    const response = await axios.get('/api/returns'); // Replace with your API endpoint
    dispatch({ type: FETCH_RETURNS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_RETURNS_FAILURE, payload: error.message });
  }
};

// Mark a book as returned
export const markAsReturned = (returnId) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/returns/mark/${returnId}`); // API call to mark as returned
    dispatch({ type: MARK_RETURNED, payload: response.data });
  } catch (error) {
    console.error("Error marking return:", error);
  }
};
