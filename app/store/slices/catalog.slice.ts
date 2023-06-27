import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { type IProduct } from "@/types/product";
import { type RootState } from "../store";

interface ICartState {
  activeItem: IProduct | null
}

const initialState: ICartState = {
  activeItem: null
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setActiveItem: (state, action) => {
      state.activeItem = action.payload
    },
    setActiveItemVariant: (state, action) => {
      if (state.activeItem) {
        state.activeItem.variant = action.payload
      }
    }
  },
});

// Selectors
export const getActiveItem = (state: RootState) => state.catalog.activeItem;

export const actions = catalogSlice.actions;
export default catalogSlice.reducer;
