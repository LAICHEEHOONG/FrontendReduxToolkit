import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  startDate: null,
  endDate: null,
  page: 1,
  allPages: 1,
  status: "",
  targetGroup: "",
};

export const search2Slice = createSlice({
  name: "search2",
  initialState,
  reducers: {
    setSearchText: (state, action) => {
      state.text = action.payload;
    },
    setDateStart: (state, action) => {
      state.startDate = action.payload
    },
    setDateEnd: (state, action) => {
      state.endDate = action.payload
    },
    searchAllPage: (state, action) => {
      state.allPages = action.payload
    },
    changeSearchPage: (state, action) => {
      state.page = action.payload
    },
    searchResetAction: (state) => {
      state = initialState
    },
    searchStatusAction: (state, action) => {
      state.status = action.payload
    },
    searchTargetGroupAction: (state, action) => {
      state.targetGroup = action.payload
    }
  },
});

export const { setSearchText, setDateStart, setDateEnd, 
  searchAllPage, changeSearchPage, searchResetAction,
searchStatusAction, searchTargetGroupAction } = search2Slice.actions;
export default search2Slice.reducer;

// export const { pageAction, allPageAction } = pageControlSlice.actions;
// export default pageControlSlice.reducer;
