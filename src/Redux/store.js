import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../Posts/newsSlice';
import filterReducer from "../components/FilterSlice";
import searchReducer from "./searchSlice";


export const store = configureStore({
  reducer:{
    news:newsReducer,
    filter:filterReducer,
    search:searchReducer,
  }
})