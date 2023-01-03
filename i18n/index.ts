// pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import HowWeWork from "./pages/HowWeWork";
import Blog from "./pages/Blog";

// posts
import LgesChecksForCheques from "./pages/LgesCheckForCheques";
import ProjectPricing from "./pages/ProjectPricing";

// blocks
import Footer from "./blocks/Footer";
import Header from "./blocks/Header";
import Contact from "./blocks/Contact";

// routes cfg
import HomeRoute from "./pages/Home/route.json";
import BlogRoute from "./pages/Blog/route.json";
import HowWeWorkRoute from "./pages/HowWeWork/route.json";
import LgesChecksForChequesRoute from "./pages/LgesCheckForCheques/route.json";
import ProjectPricingRoute from "./pages/ProjectPricing/route.json";

export const LocalesMap = {
  // pages
  home: Home as any,
  notFound: NotFound as any,
  howWeWork: HowWeWork as any,
  blog: Blog as any,

  // blocks
  footer: Footer as any,
  contact: Contact as any,
  header: Header as any,

  // posts
  lgesChecksForCheques: LgesChecksForCheques as any,
  projectPricing: ProjectPricing as any,
};

export const RoutesMap = {
  home: HomeRoute as any,
  howWeWork: HowWeWorkRoute as any,
  blog: BlogRoute as any,
  lgesChecksForCheques: LgesChecksForChequesRoute as any,
  projectPricing: ProjectPricingRoute as any,
};
