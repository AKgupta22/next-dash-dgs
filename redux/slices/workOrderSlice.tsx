import { createSlice } from "@reduxjs/toolkit";

const workOrderSlice = createSlice({
  name: "work-order",
  initialState: [],
  reducers: {
    addWorkOrder(state, action) {
      // perform action
    },
  },
});

export const { addWorkOrder } = workOrderSlice.actions;

export default workOrderSlice.reducer;
