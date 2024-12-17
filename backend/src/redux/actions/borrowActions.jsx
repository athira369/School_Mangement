import axios from 'axios';

export const FETCH_BORROW_REQUESTS = 'FETCH_BORROW_REQUESTS';
export const APPROVE_BORROW_REQUEST = 'APPROVE_BORROW_REQUEST';

export const fetchBorrowRequests = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/borrow-requests');
    dispatch({ type: FETCH_BORROW_REQUESTS, payload: response.data });
  } catch (error) {
    console.error("Error fetching borrow requests:", error);
  }
};

export const approveBorrowRequest = (requestId) => async (dispatch) => {
  try {
    const response = await axios.post(`/api/borrow-requests/approve/${requestId}`);
    dispatch({ type: APPROVE_BORROW_REQUEST, payload: response.data });
  } catch (error) {
    console.error("Error approving borrow request:", error);
  }
};
