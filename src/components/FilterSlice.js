import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async action using createAsyncThunk
export const fetchFilteredCountry = createAsyncThunk('filter/fetchFilteredCountry', async ({countryCode}) => {
  try {
    const apiKey = '2acb91a1189e4c378680b0ad0e99d5f1';
    const filterUrl = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${apiKey}`;
    const response = await axios.get(filterUrl);
    return response.data.articles;
  } catch (error) {
    throw error;
  }
});

// Define the initial state
const initialState = {
  filteredArticles: [],
  status: 'idle', 
  error: null,
};

// Create a slice
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFilteredCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filteredArticles = action.payload;
      })
      .addCase(fetchFilteredCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async action and reducer


export default filterSlice.reducer;
