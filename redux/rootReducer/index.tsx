import { combineReducers } from "@reduxjs/toolkit";
import workOrderSlice from "../slices/workOrderSlice";
import { workOrderStateType } from "../slices/workOrderSlice";
import eventSlice, { eventStateType } from "../slices/eventSlice";

export interface RootState {
  workOrder: workOrderStateType[];
  events: eventStateType[];
}

const rootReducer = combineReducers({
  workOrder: workOrderSlice,
  events: eventSlice,
});

export default rootReducer;
