import { FC } from "react";

import styles from "./Catalog.module.scss";
import Carousel from "./carousel/Carousel";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = ({}) => {
  return (
    <div>
      <Carousel />
    </div>
  );
};

export default Catalog;
