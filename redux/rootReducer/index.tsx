import { combineReducers } from "@reduxjs/toolkit";
import workOrderSlice from "../slices/workOrderSlice";
import { workOrderStateType } from "../slices/workOrderSlice";

export interface RootState {
  workOrder: workOrderStateType[];
}

const rootReducer = combineReducers({
  workOrder: workOrderSlice,
});

export default rootReducer;
