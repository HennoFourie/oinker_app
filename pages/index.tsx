import type { NextPage } from "next";
import { Shell } from '../views/Shell'
import Head from "next/head";

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Oinker</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/assets/meta/safari-pinned-tab.svg"
          color="#ffa8a8"
        />
        <link rel="shortcut icon" href="/assets/meta/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="Oinker" />
        <meta name="application-name" content="Oinker" />
        <meta name="msapplication-TileColor" content="#ffd4d4" />
        <meta
          name="msapplication-config"
          content="/assets/meta/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffd4d4" />
      </Head>

      <>
        <Shell />
      </>
    </>
  );
};

export default Home;
