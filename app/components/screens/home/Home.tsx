import { FC } from "react";

import Layout from "@/layout/Layout";
import Catalog from "@/ui/catalog/Catalog";

const Home: FC = () => {
  return (
    <Layout>
      <Catalog />
    </Layout>
  );
};

export default Home;
