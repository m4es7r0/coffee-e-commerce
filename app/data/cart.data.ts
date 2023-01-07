import { ICartItem } from "@/types/cart";
import { products } from "./products.data";

export const cart: ICartItem[] = [
  {
    id: 1,
    amount: 1,
    product: products[0],
  },
  {
    id: 2,
    amount: 1,
    product: products[1],
  },
  {
    id: 3,
    amount: 1,
    product: products[2],
  },
  {
    id: 4,
    amount: 1,
    product: products[3],
  },
  {
    id: 5,
    amount: 1,
    product: products[4],
  },
  {
    id: 6,
    amount: 1,
    product: products[5],
  },
];
