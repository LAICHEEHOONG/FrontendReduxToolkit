import { createSlice } from "@reduxjs/toolkit";

const initialState = { tableStatus: true};

export const changeTableSlice = createSlice({
    name: 'changeTable',
    initialState,
    reducers: {
        changeTableAction: (state, action) => {
            state.tableStatus = action.payload
        }
    }
})

export const {changeTableAction} = changeTableSlice.actions;
export default changeTableSlice.reducer;

// export const searchResDataSlice = createSlice({
//   name: "searchResData",
//   initialState,
//   reducers: {
//     setSearchResData: (state, action) => {
//       state = action.payload;
//     },
//     clearResData: (state) => {
//       state = initialState;
//     },
//   },
// });

// export const { setSearchResData, clearResData } = searchResDataSlice.actions;
// export default searchResDataSlice.reducer;


