export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  /*TODO: add review interface*/
  reviews: [];
  images: string[];
}
