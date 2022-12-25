import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Header.module.scss";
import { HeaderLinks } from "./components/HeaderLinks";
import { buildHeaderMenuItems } from "./helpers/buildHeaderMenuItems";

const Header: React.FC = () => {
  const { strings } = useLocale();
  const menuLinks = buildHeaderMenuItems(strings.blocks.header.menu);

  return (
    <header itemScope itemProp="header" className={styles.header}>
      <img src="#" alt="indays.app" itemProp="logo" />
      <HeaderLinks items={menuLinks} />
    </header>
  );
};

export default Header;
