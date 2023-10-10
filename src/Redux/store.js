import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../Posts/newsSlice';
import filterReducer from "../components/FilterSlice";


export const store = configureStore({
  reducer:{
    news:newsReducer,
    filter:filterReducer,
    
  }
})