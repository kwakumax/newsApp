import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchArticles = createAsyncThunk('search/searchArticles', async (query) => {
  try {
    const apiKey = '2acb91a1189e4c378680b0ad0e99d5f1';
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
});


const initialState = {
  searchResults: [],
  status: 'idle',
  error: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(searchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;

