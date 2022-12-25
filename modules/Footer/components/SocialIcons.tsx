import React from "react";
import { useLocale } from "../../../hooks/locale";

export const SocialIcons: React.FC = () => {
  const { strings } = useLocale();

  return (
    <menu itemScope itemProp="socialMediaLinks" className="footer--social-media-links">
      <li itemProp="socialMediaLink">
        <a href="#" itemProp="link">
          <img src="#" alt={strings.blocks.footer.socialMediaLinks.alts.github} itemProp="icon" />
        </a>
      </li>

      <li itemProp="socialMediaLink">
        <a href="#" itemProp="link">
          <img src="#" alt={strings.blocks.footer.socialMediaLinks.alts.linkedin} itemProp="icon" />
        </a>
      </li>
    </menu>
  );
};
