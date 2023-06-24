import configureStore from "@reduxjs/toolkit";
import combineReducers from "redux";
import aletrsSlice from "./alertsSlice";

const rootReducer = combineReducers({
  alerts: aletrsSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
