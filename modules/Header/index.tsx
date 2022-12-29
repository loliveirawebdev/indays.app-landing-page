import React from "react";
import { useLocale } from "../../hooks/locale";
import { usePageScroll } from "../../hooks/pageScroll";
import styles from "../../styles/Header.module.scss";
import { HeaderLinks } from "./components/HeaderLinks";
import { buildHeaderMenuItems } from "./helpers/buildHeaderMenuItems";

const Header: React.FC = () => {
  const { strings } = useLocale();
  const menuLinks = buildHeaderMenuItems(strings.blocks.header.menu);

  const { blockScroll, unblockScroll } = usePageScroll();
  const [isMobileCollapsed, setIsMobileCollapsed] = React.useState(true);

  const collapseMobile = () => {
    unblockScroll();
    setIsMobileCollapsed(true);
  };

  const openMobileMenu = () => {
    blockScroll();
    setIsMobileCollapsed(false);
  };

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
          <img
            width="2.4rem"
            height="2.4rem"
            itemProp="showMenu"
            src="/assets/hamburger-menu.webp"
            alt={strings.general["hamburger-icon"]}
          />
        </button>

        <HeaderLinks collapseMobile={collapseMobile} isMobileCollapsed={isMobileCollapsed} items={menuLinks} />
      </div>
    </header>
  );
};

export default Header;
