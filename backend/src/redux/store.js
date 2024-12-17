import { configureStore } from '@reduxjs/toolkit';

// Import your reducers for books, members, borrow requests, returns, and others
import  bookReducer  from './reducers/bookReducer';
import  memberReducer  from './reducers/memberReducer';
import  borrowReducer  from './reducers/borrowReducer';
import  returnReducer  from './reducers/returnReducer';

;

const store = configureStore({
  reducer: {
    books: bookReducer,
    members: memberReducer,
    borrowRequests: borrowReducer,
    returns: returnReducer,
 
  },
});

export default store;

