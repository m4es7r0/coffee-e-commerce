import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { ICartItem } from "../../types/cart";

import { cart } from "../../data/cart.data";
import { RootState } from "../store";

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
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      // total price
      state.totalPrice = state.cart.reduce((acc, curr) => {
        return acc + curr.product.price * curr.amount;
      }, 0);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce((acc, curr) => {
        return acc + curr.product.price * curr.amount;
      }, 0);
    },
    setItemAmount: (
      state,
      action: PayloadAction<{ type: "plus" | "minus"; id: number }>
    ) => {
      switch (action.payload.type) {
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
          () => {};
      }

      // total price
      state.totalPrice = state.cart.reduce((acc, curr) => {
        return acc + curr.product.price * curr.amount;
      }, 0);
    },
  },
});

// Selectors
export const getCartSelector = (state: RootState) => state.cart.cart;
export const getTotalPriceSelector = (state: RootState) =>
  state.cart.totalPrice;

export const actions = cartSlice.actions;
export default cartSlice.reducer;
