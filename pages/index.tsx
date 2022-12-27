import React from "react";
import Appeal from "../modules/Appeal";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Contact from "../modules/Contact";
import Headline from "../modules/Headline";
import HowWeWork from "../modules/HowWeWork";
import Solutions from "../modules/Solutions";
import { NeedHelp } from "../components/NeedHelp";

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
