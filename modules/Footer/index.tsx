import React from "react";
import { useLocale } from "../../hooks/locale";
import { FooterLinks } from "./components/FooterLinks";
import { SocialIcons } from "./components/SocialIcons";
import { buildFooterMenuItems } from "./helpers/buildFooterMenuItems";
import { renderParagraphs } from "./helpers/renderParagraphs";

const Footer: React.FC = () => {
  const { strings } = useLocale();
  const menuItems = buildFooterMenuItems(strings);

  return (
    <footer>
      <article>
        <h6>{strings.blocks.footer.title}</h6>
        {renderParagraphs(strings.blocks.footer.paragraphs)}
      </article>

      <FooterLinks items={menuItems} />
      <SocialIcons />
    </footer>
  );
};

export default Footer;