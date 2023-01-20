import { FC, useEffect, useRef } from "react";
import CartItem from "./cart-item/CartItem";

import { formatCurrency } from "@/utils/formatCurrency";

import { useAppActions, useAppSelector } from "@/hooks/useRedux";
import {
  getCartSelector,
  getTotalPriceSelector,
} from "@/store/slices/cart.slice";

import clsx from "clsx";
import styles from "./cart.module.scss";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { IoBag, IoBagOutline } from "react-icons/io5";

const Cart: FC = () => {
  const { getTotalPrice } = useAppActions();

  useEffect(() => {
    getTotalPrice();
  }, []);

  // Cart info logic
  const cart = useAppSelector(getCartSelector);
  const totalPrice = useAppSelector(getTotalPriceSelector);

  // Drawer logic
  const btnRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className={styles.cart}>
      {totalPrice > 0 && (
        <Tag
          variant="subtle"
          borderRadius="full"
          backgroundColor="#f23c3d"
          color={"white"}
          fontWeight={"bold"}
        >
          {cart.length > 0 &&
            cart.reduce((acc: number, curr) => acc + curr.amount, 0)}
        </Tag>
      )}
      <Button variant="unstyled" onClick={onOpen}>
        <Text>My basket</Text>
      </Button>
      <div className="relative block lg:hidden">
        <IconButton
          onClick={onOpen}
          ref={btnRef}
          aria-label="Bag"
          type="button"
          variant="unstyled"
          color="#9ca3af"
          icon={
            cart.length > 0 ? (
              <Icon as={IoBag} boxSize={9} color="#008f65" />
            ) : (
              <Icon as={IoBagOutline} boxSize={8} />
            )
          }
        />
        {cart.length > 0 && (
          <div
            className="absolute cursor-pointer top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] leading-none text-white text-md font-[500]"
            onClick={onOpen}
          >
            {cart.reduce((acc: number, curr) => acc + curr.amount, 0)}
          </div>
        )}
      </div>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        preserveScrollBarGap
        blockScrollOnMount
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Basket</DrawerHeader>

          <DrawerBody className="flex flex-col gap-4">
            {totalPrice ? (
              cart.map((cart) => <CartItem item={cart} key={cart.id} />)
            ) : (
              <p className={styles.cart_epmty}>add some items</p>
            )}
          </DrawerBody>

          {!!totalPrice && (
            <DrawerFooter justifyContent="space-between">
              <b>{`Total Price: ${formatCurrency(totalPrice)}`}</b>
              <Button colorScheme="green">Checkout</Button>
            </DrawerFooter>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Cart;
