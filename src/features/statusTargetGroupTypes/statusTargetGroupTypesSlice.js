import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statusType: [],
  targetGroupType: [],
};

export const statusTargetGroupTypesSlice = createSlice({
  name: "statusTargetGroupTypes",
  initialState,
  reducers: {
    statusTargetGroupTypesAction: (state, action) => {
      state.statusType = action.payload[0];
      state.targetGroupType = action.payload[1];
    },
  },
});

export const { statusTargetGroupTypesAction } =
  statusTargetGroupTypesSlice.actions;
export default statusTargetGroupTypesSlice.reducer;

