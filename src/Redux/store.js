import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '.posts/newsSlice';


export const store = configureStore({
  reducer:{
    news:newsReducer
  }
})