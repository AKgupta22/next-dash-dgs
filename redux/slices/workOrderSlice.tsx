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
    updateWorkOrder(state, action) {
      const { id } = action.payload;
      const itemIndex = state.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state[itemIndex] = { ...action.payload };
      }
    },
    deleteWorkOrder(state, action) {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addWorkOrder, updateWorkOrder, deleteWorkOrder } =
  workOrderSlice.actions;

export default workOrderSlice.reducer;
