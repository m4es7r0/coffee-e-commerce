import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import MenuItem from "./menu-item/MenuItem";

import { menu } from "@/data/menu.data";

import styles from "./menu.module.scss";

const Menu: FC = () => {
  return (
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
  );
};

export default Menu;
