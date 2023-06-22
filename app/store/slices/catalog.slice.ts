import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "../store";

import type { ICartItem } from "../../types/cart";

interface ICartState {
  activeItem: ICartItem | null
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
    }
  },
});

// Selectors
export const getActiveItem = (state: RootState) => state.catalog.activeItem;

export const actions = catalogSlice.actions;
export default catalogSlice.reducer;
