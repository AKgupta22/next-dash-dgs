import { eventType } from "@/view/Calender/components/AddEventForm";
import { createSlice } from "@reduxjs/toolkit";

export interface eventStateType extends eventType {
  start: Date;
  end: Date;
}

const initialState: eventStateType[] = [];

const eventSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent(state, action) {      
      state.push(action.payload);
    },
  },
});

export const { addEvent } = eventSlice.actions;

export default eventSlice.reducer;
