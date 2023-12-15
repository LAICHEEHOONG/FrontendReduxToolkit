import { createSlice } from "@reduxjs/toolkit";

const initialState = { resData: [] };

export const searchResDataSlice = createSlice({
  name: "searchResData",
  initialState,
  reducers: {
    setSearchResData: (state, action) => {
      state.resData = action.payload;
    },
    clearResData: (state) => {
      state.resData = initialState.resData;
    },
  },
});

export const { setSearchResData, clearResData } = searchResDataSlice.actions;
export default searchResDataSlice.reducer;
