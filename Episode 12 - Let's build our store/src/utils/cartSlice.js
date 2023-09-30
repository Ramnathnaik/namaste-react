import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const currentItems = state.items.filter(
        (item) => item !== action.payload
      );
      return { items: currentItems };
    },
    clearItems: (state) => {
      const currentState = current(state); //See the current state
      console.log(currentState);
      state.items.length = 0;
      // return [];
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
