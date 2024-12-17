import {
    FETCH_RETURNS_REQUEST,
    FETCH_RETURNS_SUCCESS,
    FETCH_RETURNS_FAILURE,
    MARK_RETURNED,
  } from '../actions/returnActions';
  
  // Initial State
  const initialState = {
    returns: [],      // List of returns (books to be returned)
    loading: false,   // Loading state for fetching data
    error: null,      // Error message if any API call fails
  };
  
  // Return Reducer
  const returnReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_RETURNS_REQUEST:
        return { ...state, loading: true };
  
      case FETCH_RETURNS_SUCCESS:
        return { ...state, loading: false, returns: action.payload };
  
      case FETCH_RETURNS_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      case MARK_RETURNED:
        return {
          ...state,
          returns: state.returns.filter((returnItem) => returnItem.id !== action.payload.id), // Remove the returned item
        };
  
      default:
        return state;
    }
  };
  
  export default returnReducer;
  