import React from "react";
import { useLocale } from "../../../hooks/locale";

export const SocialIcons: React.FC = () => {
  const { strings } = useLocale();

  return (
    <menu itemScope itemProp="socialMediaLinks" className="footer--social-media-links">
      <li itemProp="socialMediaLink">
        <a href="https://github.com/s1mbi0se" target="_blank" itemProp="link">
          <img src="/assets/github.svg" alt={strings.blocks.footer.socialMediaLinks.alts.github} itemProp="icon" />
        </a>
      </li>

      <li itemProp="socialMediaLink">
        <a href="https://www.linkedin.com/company/simbioseventures" target="_blank" itemProp="link">
          <img src="/assets/linkedin.svg" alt={strings.blocks.footer.socialMediaLinks.alts.linkedin} itemProp="icon" />
        </a>
      </li>
    </menu>
  );
};
