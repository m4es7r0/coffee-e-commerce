import { FC, useState } from "react";

// import { useAppSelector } from "@/hooks/useRedux";
import { cart } from "@/data/cart.data";

import CarouselItem from "./carousel-item/CarouselItem";

import { ICartItem } from "@/types/cart";

import styles from "./Carousel.module.scss";

interface CarouselProps {}

const Carousel: FC<CarouselProps> = ({}) => {
  // const { cart } = useAppSelector((store) => store.cart);

  return (
    <div className={styles.carousel}>
      {cart.slice(0, 4).map((product) => (
        <CarouselItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Carousel;
