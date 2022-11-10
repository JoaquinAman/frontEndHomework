 import { configureStore } from "@reduxjs/toolkit";
 import errorReducer from "../features/Error/errorSlice";
 

 const reducers = {
    error: errorReducer,
  };
  
  export const store = configureStore({
    reducer: reducers,
  });