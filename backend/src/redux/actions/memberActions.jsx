import axios from 'axios';

// Action Types
export const FETCH_MEMBERS_REQUEST = 'FETCH_MEMBERS_REQUEST';
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS';
export const FETCH_MEMBERS_FAILURE = 'FETCH_MEMBERS_FAILURE';

// Action Creators
export const fetchMembers = () => async (dispatch) => {
  dispatch({ type: FETCH_MEMBERS_REQUEST });
  try {
    const response = await axios.get('/api/members'); // API endpoint to fetch members
    dispatch({ type: FETCH_MEMBERS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_MEMBERS_FAILURE, payload: error.message });
  }
};
