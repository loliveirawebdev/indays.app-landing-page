import React from "react";
import Head from "next/head";
import Footer from "../../../modules/Footer";
import Header from "../../../modules/Header";
import { useLocale, useRouteConfig } from "../../../hooks/locale";

export default function LgesChecksForCheques() {
  const { strings } = useLocale("lgesChecksForCheques");
  const { localizedRoute, alternates } = useRouteConfig("lgesChecksForCheques");

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
      </Head>

      <Header breadcrumbs={["home", "blog", "lgesChecksForCheques"]} />

      {/* <main className="main-container">
        <HowWeWork />
        <hr className="section-divider" />
      </main> */}

      <Footer />
    </React.Fragment>
  );
}
