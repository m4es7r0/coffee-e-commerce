import Head from "next/head";
import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const Meta: FC<PropsWithChildren<MetaProps>> = ({
  title,
  description,
  image = "/starbucks.svg",
  type = "website",
  children,
}) => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;
  return (
    <>
      <Head>
        <title itemProp="headline">{title}</title>
        <link rel="shortcut icon" href="/starbucks.svg" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {description ? (
          <>
            <meta
              itemProp="description"
              name="description"
              content={description.slice(0, 152) + "..."}
            />
            <link rel="canonical" href={currentUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:locale" content="en" />
            <meta property="og:title" content={title} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:image" content={image} />
            <meta
              property="og:site_name"
              content="Coffee E-Commerce (pet project)"
            />
            <meta
              property="og:description"
              content={description.slice(0, 152) + "..."}
            />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  );
};

export default Meta;
