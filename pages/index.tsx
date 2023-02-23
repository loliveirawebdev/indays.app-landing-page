import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../modules/Header";
import Headline from "../modules/Headline";
import Customers from "../modules/Customers";
import styles from "../styles/Index.module.scss";
import { useLocale, useRouteConfig } from "../hooks/locale";

const Appeal = dynamic(() => import("../modules/Appeal"));
const Footer = dynamic(() => import("../modules/Footer"));
const Contact = dynamic(() => import("../modules/Contact"));
const Solutions = dynamic(() => import("../modules/Solutions"));
const NeedHelp = dynamic(() => import("../components/NeedHelp").then((mod) => mod.NeedHelp));

export default function Home() {
  const { strings } = useLocale("home");
  const { localizedRoute, alternates } = useRouteConfig("home");

  return (
    <React.Fragment>
      <NeedHelp />

      <main className="main-container">
        <div className={styles.top}>
          <Header />
          <Headline />
        </div>

        <div className={styles.top}>
          <Header />
          <Headline />
        </div>

        <div className={styles.top}>
          <Header />
          <Headline />
        </div>

        <Customers />
        <hr className="section-divider" />
        <Appeal />
        <hr className="section-divider" />
        <Solutions />
        <hr className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </React.Fragment>
  );
}
