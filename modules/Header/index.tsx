import React from "react";
import { useLocale } from "../../hooks/locale";
import { HeaderLinks } from "./components/HeaderLinks";
import { buildHeaderMenuItems } from "./helpers/buildHeaderMenuItems";

const Header: React.FC = () => {
  const { strings } = useLocale();
  const menuLinks = buildHeaderMenuItems(strings.blocks.header.menu);

  return (
    <header>
      <img src="#" alt="indays.app" />
      <HeaderLinks items={menuLinks} />
    </header>
  );
};

export default Header;
