import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Header.module.scss";
import { HeaderLinks } from "./components/HeaderLinks";
import { buildHeaderMenuItems } from "./helpers/buildHeaderMenuItems";

const Header: React.FC = () => {
  const { strings } = useLocale();
  const menuLinks = buildHeaderMenuItems(strings.blocks.header.menu);

  const [isMobileCollapsed, setIsMobileCollapsed] = React.useState(true);
  const collapseMobile = () => setIsMobileCollapsed(true);
  const openMobileMenu = () => setIsMobileCollapsed(false);

  return (
    <header itemScope itemProp="header" className={styles.header}>
      <div className="header--content-container">
        <figure className="header--logo" itemScope itemProp="logo">
          <div className="header--logo--text" itemProp="text">
            in<span>days</span>.app
          </div>

          <span className="header--logo--backdrop" itemProp="shadow" />
        </figure>

        <span className="header--menu-separator" />

        <button type="button" onClick={openMobileMenu} className="header--hamburger-menu">
          <img src="/assets/hamburger-menu.svg" alt="Expand menu options" itemProp="showMenu" />
        </button>

        <HeaderLinks collapseMobile={collapseMobile} isMobileCollapsed={isMobileCollapsed} items={menuLinks} />
      </div>
    </header>
  );
};

export default Header;
