export interface IProduct {
  id: number;
  name: string;
  description: string;
  variant: "S" | "M" | "L";
  price: number;
  images: string[];
}
