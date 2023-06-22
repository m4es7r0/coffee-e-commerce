import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Menu as ChakraMenu,
  MenuItem as ChakraMenuItem,
  IconButton,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";

import MenuItem from "./menu-item/MenuItem";

import { menu } from "@/data/menu.data";

import styles from "./menu.module.scss";

const Menu: FC = () => {
  return (
    <>
      <div className={styles.menu}>
        <Link href="/" className="flex justify-center items-center">
          <Image src="./starbucks.svg" alt="logo" width={100} height={100} />
        </Link>

        <nav>
          <ul>
            {menu.map(({ item }) => (
              <MenuItem item={item} key={item.name} />
            ))}
          </ul>
        </nav>
      </div>
      <div className={styles.mobile_menu}>
        <ChakraMenu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon color="#9ca3af" />}
            variant="unstyled"
          />
          <MenuList>
            <ChakraMenuItem>Coffee</ChakraMenuItem>
            <ChakraMenuItem>Tea</ChakraMenuItem>
          </MenuList>
        </ChakraMenu>
      </div>
    </>
  );
};

export default Menu;
