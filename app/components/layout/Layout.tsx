import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import Header from "./header";

import styles from "./layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Coffee E-Commerce (pet project)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/starbucks.svg" />
      </Head>
      <div className={styles.layout}>
        <div>
          <Header />
          <section className={styles.content}>{children}</section>
        </div>
      </div>
    </>
  );
};

export default Layout;
