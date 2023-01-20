import { ICartItem } from "@/types/cart";

export interface IChangeItemAmount extends Pick<ICartItem, "id"> {
  operation: "minus" | "plus";
}
