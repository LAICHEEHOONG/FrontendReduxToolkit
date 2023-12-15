import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageNum: [],
  allPage: 10,
};

export const pageControlSlice = createSlice({
  name: "pageControl",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.pageNum = action.payload;
    },
    allPage: (state, action) => {
      state.allPage = action.payload.pages;
    },
    clearText: (state) => {
        state.pageNum = [];
    }
  },
});

export const { changePage, allPage, clearText } = pageControlSlice.actions;
export default pageControlSlice.reducer;


