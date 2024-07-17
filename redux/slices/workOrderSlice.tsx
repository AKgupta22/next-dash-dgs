import { createSlice } from "@reduxjs/toolkit";

export interface workOrderStateType {
  id: string;
  product_name: string;
  customer_name: string;
  city: string;
  price: string;
  order_date: string;
}

const initialState: workOrderStateType[] = [];

const workOrderSlice = createSlice({
  name: "work-order",
  initialState: initialState,
  reducers: {
    addWorkOrder(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addWorkOrder } = workOrderSlice.actions;

export default workOrderSlice.reducer;
