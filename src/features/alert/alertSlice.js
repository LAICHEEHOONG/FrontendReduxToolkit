import { createSlice } from "@reduxjs/toolkit";

const initialState = {alertStatus: false};

export const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alertStatus = action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer
