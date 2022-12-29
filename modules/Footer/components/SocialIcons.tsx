import React from "react";
import { useLocale } from "../../../hooks/locale";

export const SocialIcons: React.FC = () => {
  const { strings } = useLocale();

  return (
    <menu itemScope itemProp="socialMediaLinks" className="footer--social-media-links">
      <li itemProp="socialMediaLink">
        <a href="https://github.com/s1mbi0se" target="_blank" rel="noreferrer" itemProp="link">
          <img
            width="2.4rem"
            height="2.4rem"
            itemProp="icon"
            src="/assets/github.webp"
            alt={strings.blocks.footer.socialMediaLinks.alts.github}
          />
        </a>
      </li>

      <li itemProp="socialMediaLink">
        <a href="https://www.linkedin.com/company/simbioseventures" target="_blank" rel="noreferrer" itemProp="link">
          <img
            width="2.4rem"
            height="2.4rem"
            itemProp="icon"
            src="/assets/linkedin.webp"
            alt={strings.blocks.footer.socialMediaLinks.alts.linkedin}
          />
        </a>
      </li>
    </menu>
  );
};
