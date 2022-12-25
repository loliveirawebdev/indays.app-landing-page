import React from "react";
import { useLocale } from "../../../hooks/locale";

export const SquadBlock: React.FC = () => {
  const { strings } = useLocale();

  return (
    <React.Fragment>
      <p itemProp="description">{strings.blocks.howWeWork.squad.description}</p>

      <figure itemScope itemProp="figure">
        <ol itemProp="squadFormation" itemType="https://schema.org/ItemList">
          <li itemProp="itemListElement">
            <span>
              <img src="#" itemProp="icon" />
              <span itemProp="count">1</span>
            </span>

            <span itemProp="name">PM</span>
          </li>

          <li itemProp="itemListElement">
            <span>
              <img src="#" itemProp="icon" />
              <span itemProp="count">1</span>
            </span>

            <span itemProp="name">UI/UX Designer</span>
          </li>

          <li itemProp="itemListElement">
            <span>
              <img src="#" itemProp="icon" />
              <span itemProp="count">2</span>
            </span>

            <span itemProp="name">Mobile</span>
          </li>

          <li itemProp="itemListElement">
            <span>
              <img src="#" itemProp="icon" />
              <span itemProp="count">1</span>
            </span>

            <span itemProp="name">Backend</span>
          </li>
        </ol>

        <figcaption itemProp="caption">{strings.blocks.howWeWork.squad.caption}</figcaption>
      </figure>
    </React.Fragment>
  );
};
