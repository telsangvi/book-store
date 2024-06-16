import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/books'; // Replace with your API URL

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (params) => {
  const response = await axios.get(API_URL, { params });
  return response.data.payload;
});

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
