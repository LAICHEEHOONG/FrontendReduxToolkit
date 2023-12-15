import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import mobileModeReducer from '../features/mobileMode/mobileSlice'
import pageReducer from '../features/pageControl/pageControlSlice'
import search2Reducer from '../features/search2/search2Slice'
import alertReducer from '../features/alert/alertSlice.js'
import searchResDataReducer from '../features/searchResData/searchResDataSlice.js'
import changeTableReducer from '../features/changeTable/changeTableSlice.js'
import searchProgressReducer from '../features/searchProgress/searchProgressSlice.js'
import statusTargetGroupTypesReducer from '../features/statusTargetGroupTypes/statusTargetGroupTypesSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    mobileMode: mobileModeReducer,
    page: pageReducer,
    search2: search2Reducer,
    alert: alertReducer,
    searchRes: searchResDataReducer,
    changeTable: changeTableReducer,
    searchProgress: searchProgressReducer,
    statusTargetGroupTypes: statusTargetGroupTypesReducer
  },
})