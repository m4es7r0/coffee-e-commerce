import { IProduct } from "@/types/product";

export interface ICartItem {
  id: number;
  product: IProduct;
  amount: number;
}
