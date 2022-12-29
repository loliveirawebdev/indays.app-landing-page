import React from "react";
import dynamic from "next/dynamic";
import Header from "../modules/Header";
import Appeal from "../modules/Appeal";
import Headline from "../modules/Headline";

const Footer = dynamic(() => import("../modules/Footer"));
const Contact = dynamic(() => import("../modules/Contact"));
const HowWeWork = dynamic(() => import("../modules/HowWeWork"));
const Solutions = dynamic(() => import("../modules/Solutions"));
const NeedHelp = dynamic(() => import("../components/NeedHelp").then((mod) => mod.NeedHelp));

export default function Home() {
  return (
    <React.Fragment>
      <NeedHelp />
      <Header />

      <main className="main-container">
        <Headline />
        <Appeal />
        <hr className="section-divider" />
        <HowWeWork />
        <hr className="section-divider" />
        <Solutions />
        <hr className="section-divider" />
      </main>

      <Contact />
      <Footer />
    </React.Fragment>
  );
}
