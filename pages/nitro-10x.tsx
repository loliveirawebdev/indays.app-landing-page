import React from "react";
import Head from "next/head";
import Appeal from "../modules/Appeal";
import Footer from "../modules/Footer";
import Contact from "../modules/Contact";
import Nitro10x from "../modules/Nitro10x";
import Partners from "../modules/Partners";
import { NeedHelp } from "../components/NeedHelp";
import { useLocale, useRouteConfig } from "../hooks/locale";

export default function HowWeWorkPage() {
  const { strings } = useLocale("nitro10x");
  const { localizedRoute, alternates } = useRouteConfig("nitro10x");

  return (
    <React.Fragment>
      <Head>
        <title>{strings.page.title}</title>
        <meta name="title" content={strings.page.title} />

        <meta name="pagename" content={strings.page.title} />
        <meta name="keywords" content={strings.page.keywords} />
        <meta name="subject" content={strings.page.description} />
        <meta name="subtitle" content={strings.page.description} />
        <meta name="description" content={strings.page.description} />

        <meta property="og:image" content="/indays-logo.png" />
        <meta property="og:url" content="https://indays.app" />
        <meta property="og:title" content={strings.page.title} />
        <meta property="og:description" content={strings.page.description} />

        <meta property="twitter:image" content="/indays-logo.png" />
        <meta property="twitter:title" content={strings.page.title} />
        <meta property="twitter:description" content={strings.page.description} />

        <link rel="canonical" href={`https://indays.app/${localizedRoute}`} />
        <link rel="alternate" href={`https://indays.app/en/${alternates.en}`} hrefLang="en" />
        <link rel="alternate" href={`https://indays.app/${alternates["pt-BR"]}`} hrefLang="pt-BR" />
        <meta name="robots" content="noindex" />
      </Head>

      <Nitro10x />
      <NeedHelp />

      <main className="main-container">
        <hr className="section-divider" />
        <Appeal />
        <hr className="section-divider" />
        <Partners />
        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  );
}
