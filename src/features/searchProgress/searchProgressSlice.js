import { createSlice } from "@reduxjs/toolkit";

const initialState = { progressStatus: false };

export const searchProgressSlice = createSlice({
  name: "searchProgress",
  initialState,
  reducers: {
    searchProgressAction: (state, action) => {
      state.progressStatus = action.payload;
    },
  },
});

export const { searchProgressAction } = searchProgressSlice.actions;
export default searchProgressSlice.reducer;
