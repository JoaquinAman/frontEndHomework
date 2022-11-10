import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: [],
  };
  export const errorSlice = createSlice({
    name: "errors",
    initialState,
    reducers: {
      addError: (state, action) => {
        state.error.push(action.payload);
      },
      deleteError: (state, action) => {
        console.log(action.payload);
        state.error = state.error.filter(
          (error) => error.id !== action.payload.id
        );
      },
    },
  });

export default errorSlice.reducer;
export const { addError, deleteError } = errorSlice.actions;