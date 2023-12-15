import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    screenPixel: 1500,
    width: 140
}

export const mobileModeSlice = createSlice({
  name: 'mobileMode',
  initialState,
  reducers: {
    screenWidthAction: (state, action) => {
        state.screenPixel = action.payload
    },
    selectorWidthAction: (state, action) => {
        state.width = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { screenWidthAction, selectorWidthAction} = mobileModeSlice.actions

export default mobileModeSlice.reducer