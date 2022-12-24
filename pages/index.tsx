import React from "react";
import Appeal from "../modules/Appeal";
import Footer from "../modules/Footer";
import Header from "../modules/Header";
import Contact from "../modules/Contact";
import Headline from "../modules/Headline";
import HowWeWork from "../modules/HowWeWork";
import Solutions from "../modules/Solutions";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <Headline />
        <Appeal />
        <HowWeWork />
        <Solutions />
      </main>

      <Contact />
      <Footer />
    </React.Fragment>
  );
}
