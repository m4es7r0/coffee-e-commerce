import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cart } from "../../data/cart.data";

import type { ICartItem } from "../../types/cart";
import type { RootState } from "../store";
import type { IChangeItemAmount } from "../types";

interface ICartState {
  cart: ICartItem[];
  totalPrice: number;
}

const initialState: ICartState = {
  cart,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);

      // total price
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.product.price * curr.amount,
        0
      );
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.product.price * curr.amount,
        0
      );
    },
    setItemAmount: (state, action: PayloadAction<IChangeItemAmount>) => {
      switch (action.payload.operation) {
        case "plus":
          state.cart.map((el) => {
            if (el.id === action.payload.id) {
              el.amount = el.amount < 100 ? (el.amount += 1) : el.amount;
            }
          });
          break;
        case "minus":
          state.cart.map((el) => {
            if (el.id === action.payload.id) {
              el.amount = el.amount > 1 ? (el.amount -= 1) : el.amount;
            }
          });
          break;
        default:
          throw new Error(`wrong action type: ${action.type}`);
      }

      // total price
      state.totalPrice = state.cart.reduce(
        (acc, curr) => acc + curr.product.price * curr.amount,
        0
      );
    },
  },
});

// Selectors
export const getCartSelector = (state: RootState) => state.cart.cart;
export const getTotalPriceSelector = (state: RootState) =>
  state.cart.totalPrice;

export const actions = cartSlice.actions;
export default cartSlice.reducer;
