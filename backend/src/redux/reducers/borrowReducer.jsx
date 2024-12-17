import { FETCH_BORROW_REQUESTS, APPROVE_BORROW_REQUEST } from '../actions/borrowActions';

const initialState = {
  borrowRequests: [],
};

const borrowReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BORROW_REQUESTS:
      return { ...state, borrowRequests: action.payload };
    case APPROVE_BORROW_REQUEST:
      return {
        ...state,
        borrowRequests: state.borrowRequests.filter(request => request.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default borrowReducer;
