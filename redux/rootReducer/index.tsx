import { combineReducers } from "@reduxjs/toolkit";
import workOrderSlice from "../slices/workOrderSlice";

const rootReducer = combineReducers({
  workOrder: workOrderSlice,
});

export default rootReducer;
