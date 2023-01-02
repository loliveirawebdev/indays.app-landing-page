import React from "react";
import Image from "next/image";
import { Logo } from "../../components/Logo";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Header.module.scss";
import { usePageScroll } from "../../hooks/pageScroll";
import { HeaderLinks } from "./components/HeaderLinks";
import { buildHeaderMenuItems } from "./helpers/buildHeaderMenuItems";
type Props = { logoOnly?: boolean };

const Header: React.FC<Props> = ({ logoOnly }) => {
  const { strings } = useLocale("home");
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

  if (logoOnly) {
    return (
      <header itemScope itemProp="header" className={styles.header}>
        <div className="header--content-container">
          <Logo />
        </div>
      </header>
    );
  }

  return (
    <header itemScope itemProp="header" className={styles.header}>
      <div className="header--content-container">
        <Logo />
        <span className="header--menu-separator" />

        <button type="button" onClick={openMobileMenu} className="header--hamburger-menu">
          <Image
            width={24}
            height={24}
            quality={100}
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
