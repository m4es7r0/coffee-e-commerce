import type { ICartItem } from "@/types/cart";
import { FC } from "react";

import { useAppActions } from "@/hooks/useRedux";

import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const LogicSection: FC<{ item: ICartItem }> = ({ item }) => {
  const { setItemAmount } = useAppActions();

  return (
    <InputGroup>
      <InputLeftElement
        children={
          <IconButton
            variant="outline"
            borderRadius="12px"
            colorScheme="blackAlpha"
            color="#222"
            aria-label="minus"
            icon={<Icon as={AiOutlineMinus} />}
            onClick={() => setItemAmount({ operation: "minus", id: item.id })}
          />
        }
      />
      <Input
        value={item.amount}
        type="number"
        min={1}
        max={100}
        disabled
        _disabled={{ color: "#222" }}
        textAlign="center"
        variant="unstyled"
      />
      <InputRightElement
        children={
          <IconButton
            variant="outline"
            borderRadius="12px"
            colorScheme="blackAlpha"
            color="#222"
            aria-label="plus"
            icon={<Icon as={AiOutlinePlus} />}
            onClick={() => setItemAmount({ operation: "plus", id: item.id })}
          />
        }
      />
    </InputGroup>
  );
};

export default LogicSection;
