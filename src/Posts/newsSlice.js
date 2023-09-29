import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = "8b9fe0757d70451eb95b84b06ca317bd"; //  API key gotten from newsapi.org


export const fetchTopHeadlines = createAsyncThunk(
  "news/fetchTopHeadlines",
  async () => {
    const response = await axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    return response.data.articles;
  }
);

export const fetchEverything = createAsyncThunk("news/fetchEverything", async () => {
  const response = await axios
    .get(`https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`);
  return response.data.articles;
});

const initialState = {
  topHeadlines: {
    data: [],
    status: "idle",
    error: null,
  },
  everything: {
    data: [],
    status: "idle",
    error: null,
  },
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopHeadlines.pending, (state) => {
        state.topHeadlines.status = "loading";
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.topHeadlines.status = "succeeded";
        state.topHeadlines.data = action.payload;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.topHeadlines.status = "failed";
        // state.topHeadlines.error = action.error.message;
      })
      .addCase(fetchEverything.pending, (state) => {
        state.everything.status = "loading";
      })
      .addCase(fetchEverything.fulfilled, (state, action) => {
        state.everything.status = "succeeded";
        state.everything.data = action.payload;
      })
      .addCase(fetchEverything.rejected, (state, action) => {
        state.everything.status = "failed";
        // state.everything.error = action.error.message;
      });
  },
});

export const selectTopHeadlinesData = (state) =>
  state.news.topHeadlines;
export const selectEverythingData = (state) =>
  state.news.everything;

export default newsSlice.reducer;




