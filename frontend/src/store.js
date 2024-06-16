// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './store/BookSlice'; // Import your Redux slice or reducer

const store = configureStore({
  reducer: {
    books: bookReducer,
    // Add other reducers here if needed
  },
});

export default store;
