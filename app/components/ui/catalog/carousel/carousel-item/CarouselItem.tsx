import { FC, useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@chakra-ui/react";

import { ICartItem } from "@/types/cart";

import { useAppActions, useAppSelector } from "@/hooks/useRedux";
import { cn } from "@/utils/cn";
import styles from "./CarouselItem.module.scss";
import CarouselItemVariation from "./CarouselItemVariation";

interface CarouselItemProps {
  item: ICartItem;
}

const CarouselItem: FC<CarouselItemProps> = ({ item }) => {
  const { product } = item;

  const [isActive, setIsActive] = useState(false);

  const { activeItem } = useAppSelector((store) => store.catalog);

  const { setActiveItem, addToCart, setItemAmount } = useAppActions();

  useEffect(() => {
    if (!activeItem && item.id === 2) {
      setIsActive(true);
      setActiveItem(item.id === 2 ? item : null);
    }

    if (activeItem) {
      setIsActive(product.id === activeItem.id);
    }
  }, [activeItem]);

  return (
    <div
      className={cn(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={() => {
        if (activeItem!.id !== item.id) {
          setActiveItem(product);
        }
      }}
    >
      <Image
        className="h-48 w-48"
        alt={product.name}
        src={product.images[0]}
        width={1920}
        height={1080}
      />
      <div className={styles.heading}>
        <h2 title={product.name}>{product.name}</h2>
      </div>
      <div className={styles.description}>
        {isActive ? <CarouselItemVariation /> : `${product.description}`}
      </div>
      <Button
        className={styles.button}
        variant="unstyled"
        onClick={(e) => {
          e.stopPropagation();
          if (activeItem) addToCart(activeItem);
        }}
      >
        Add to basket
      </Button>
    </div>
  );
};

export default CarouselItem;
