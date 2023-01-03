import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HowWeWork from "./pages/HowWeWork";
import Blog from "./pages/Blog";

import Footer from "./blocks/Footer";
import Contact from "./blocks/Contact";
import Header from "./blocks/Header";

import HomeRoute from "./pages/Home/route.json";
import HowWeWorkRoute from "./pages/HowWeWork/route.json";
import BlogRoute from "./pages/Blog/route.json";

export const LocalesMap = {
  home: Home as any,
  notFound: NotFound as any,
  howWeWork: HowWeWork as any,
  blog: Blog as any,
  footer: Footer as any,
  contact: Contact as any,
  header: Header as any,
};

export const RoutesMap = {
  home: HomeRoute as any,
  howWeWork: HowWeWorkRoute as any,
  blog: BlogRoute as any,
};
