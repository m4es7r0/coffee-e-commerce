import type { ICartItem } from "@/types/cart";
import Image from "next/image";
import { FC } from "react";

import { useAppActions } from "@/hooks/useRedux";
import { formatCurrency } from "@/utils/formatCurrency";

import { CloseButton } from "@chakra-ui/react";
import CartActions from "./cart-actions/CartActions";

import styles from "./cart-item.module.scss";

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  const { removeFromCart } = useAppActions();

  return (
    <div className={styles.item}>
      <Image
        src={item.product.images[0]}
        width={110}
        height={110}
        alt={item.product.name}
      />
      <div className={styles["item-body"]}>
        <div className="flex w-full">
          <div className={styles.name}>{item.product.name}</div>
          <CloseButton
            onClick={() => removeFromCart(item.id)}
            aria-label="remove item"
            size="sm"
            color="rgba(242, 60, 61, 0.4)"
            border={"1px"}
            borderRadius="8px"
            borderColor="rgba(242, 60, 61, 0.4)"
            _active={{ opacity: 0.5 }}
            _hover={{
              backgroundColor: "rgba(242, 60, 61, 0.4)",
              color: "rgba(34, 34, 34, 0.8)",
              borderColor: "transparent",
            }}
          />
        </div>
        <div>
          <div className={styles.price}>
            {formatCurrency(item.product.price)}
          </div>
          <CartActions item={item} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
