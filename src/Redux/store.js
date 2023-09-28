import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../Posts/newsSlice';

export const store = configureStore({
  reducer:{
    news:newsReducer
  }
})