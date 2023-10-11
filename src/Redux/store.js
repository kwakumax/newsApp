import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './newsSlice';
import filterReducer from "./FilterSlice";
import searchReducer from "./searchSlice";


export const store = configureStore({
  reducer:{
    news:newsReducer,
    filter:filterReducer,
    search:searchReducer,
  }
})