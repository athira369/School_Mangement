import {
    FETCH_MEMBERS_REQUEST,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_FAILURE,
  } from '../actions/memberActions';
  
  const initialState = {
    members: [],
    loading: false,
    error: null,
  };
  
  const memberReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MEMBERS_REQUEST:
        return { ...state, loading: true };
      case FETCH_MEMBERS_SUCCESS:
        return { ...state, loading: false, members: action.payload };
      case FETCH_MEMBERS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default memberReducer;
  