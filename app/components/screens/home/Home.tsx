import { FC } from "react";

import Layout from "@/layout/Layout";

const Home: FC = () => {
  return (
    <Layout>
      <main className="hero flex h-screen w-full items-center justify-center">
        <h1 className="text-center text-7xl font-bold text-green">
          Hello world
        </h1>
      </main>
    </Layout>
  );
};

export default Home;
