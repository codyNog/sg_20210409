import { ChakraProvider } from "@chakra-ui/react";
import App from "next/app";
import Head from "next/head";
import "ress";
import { GlobalStore, useGlobal } from "~/store/global";

export default class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getStaticProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ChakraProvider>
        <Head>
          <title>Next App</title>
        </Head>
        <GlobalStore.Provider>
          <Component {...pageProps} />
        </GlobalStore.Provider>
      </ChakraProvider>
    );
  }
}
