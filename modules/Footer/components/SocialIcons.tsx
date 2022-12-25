import React from "react";

export const SocialIcons: React.FC = () => {
  return (
    <menu itemScope itemProp="socialMediaLinks">
      <li itemProp="socialMediaLink">
        <a href="#" itemProp="link">
          <img src="#" alt="github" itemProp="icon" />
        </a>
      </li>

      <li itemProp="socialMediaLink">
        <a href="#" itemProp="link">
          <img src="#" alt="linkedin" itemProp="icon" />
        </a>
      </li>
    </menu>
  );
};
