import React from "react";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { useLocale } from "../hooks/locale";
import { Open_Sans } from "@next/font/google";

import "../styles/_globals.scss";
const openSans = Open_Sans({ subsets: ["latin"] });
const openSansStyle = `html { font-family: ${openSans.style.fontFamily}; }`;

export default function App({ Component, pageProps }: AppProps) {
  const { strings } = useLocale();

  return (
    <React.Fragment>
      <Head>
        <title>{strings.page.title}</title>
        <meta name="title" content={strings.page.title} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style global>{openSansStyle}</style>
      </Head>

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </React.Fragment>
  );
}
