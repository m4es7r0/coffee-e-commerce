import { FC } from "react";

import { ICartItem } from "@/types/cart";

import { Button } from "@chakra-ui/react";

import { useAppActions, useAppSelector } from "@/hooks/useRedux";
import styles from "./CarouselItem.module.scss";

interface CarouselItemVariationProps {}

const _variants = ["S", "M", "L"] as const;

const CarouselItemVariation: FC<CarouselItemVariationProps> = () => {
  const { setActiveItemVariant } = useAppActions();
  const { activeItem } = useAppSelector((store) => store.catalog);

  return (
    <div className={styles.variation}>
      <span>Size</span>
      <div>
        {_variants.map((variant) => {
          return (
            <Button
              key={variant}
              size="sm"
              style={{
                backgroundColor: `${
                  variant === activeItem?.variant ? "#008f65" : "#fff"
                }`,
                color: `${variant === activeItem?.variant ? "#fff" : "#222"}`,
                border: `${
                  variant === activeItem?.variant ? "1px solid #fff" : "none"
                }`,
              }}
              maxW={"1"}
              children={variant}
              onClick={(e) => {
                e.stopPropagation();
                setActiveItemVariant(variant);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CarouselItemVariation;
