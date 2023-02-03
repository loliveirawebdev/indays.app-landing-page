// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HowWeWork from "./pages/HowWeWork";
import Nitro10x from "./pages/Nitro10x";

// blocks
import Footer from "./blocks/Footer";
import Header from "./blocks/Header";
import Contact from "./blocks/Contact";

// routes cfg
import HomeRoute from "./pages/Home/route.json";
import HowWeWorkRoute from "./pages/HowWeWork/route.json";
import Nitro10xRoute from "./pages/Nitro10x/route.json";

export const LocalesMap = {
  // pages
  home: Home as any,
  notFound: NotFound as any,
  howWeWork: HowWeWork as any,
  nitro10x: Nitro10x as any,

  // blocks
  footer: Footer as any,
  contact: Contact as any,
  header: Header as any,
};

export const RoutesMap = {
  home: HomeRoute as any,
  howWeWork: HowWeWorkRoute as any,
  nitro10x: Nitro10xRoute as any,
};
