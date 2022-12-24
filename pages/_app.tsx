import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useLocale } from "../hooks/locale";
import "../styles/_globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  const { strings } = useLocale();

  return (
    <React.Fragment>
      <Head>
        <title>{strings.page.title}</title>
        <meta name="title" content={strings.page.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}
