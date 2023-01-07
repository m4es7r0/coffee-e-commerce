import Link from "next/link";
import { FC } from "react";
import { IMenuItem } from "./menu-item.props";

const MenuItem: FC<IMenuItem> = ({ item }) => {
  return (
    <li>
      <Link href={item.href}>{item.name}</Link>
    </li>
  );
};

export default MenuItem;
