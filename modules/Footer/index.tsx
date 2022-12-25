import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Footer.module.scss";
import { FooterLinks } from "./components/FooterLinks";
import { SocialIcons } from "./components/SocialIcons";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { buildFooterMenuItems } from "./helpers/buildFooterMenuItems";

const Footer: React.FC = () => {
  const { strings } = useLocale();
  const menuItems = buildFooterMenuItems(strings.blocks.footer.menus);

  return (
    <footer itemScope itemProp="footer" className={styles.footer}>
      <article itemScope itemProp="about">
        <h6 itemProp="title">{strings.blocks.footer.title}</h6>
        {renderParagraphs(strings.blocks.footer.paragraphs)}
      </article>

      <FooterLinks items={menuItems} />
      <SocialIcons />
    </footer>
  );
};

export default Footer;
