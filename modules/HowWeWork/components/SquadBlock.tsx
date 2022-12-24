import React from "react";
import { useLocale } from "../../../hooks/locale";

export const SquadBlock: React.FC = () => {
  const { strings } = useLocale();

  return (
    <React.Fragment>
      <p>{strings.blocks.howWeWork.squad.description}</p>

      <figure>
        <ol>
          <li>
            <span>
              <img src="#" />
              <span>1</span>
            </span>

            <span>PM</span>
          </li>

          <li>
            <span>
              <img src="#" />
              <span>1</span>
            </span>

            <span>UI/UX</span>
          </li>

          <li>
            <span>
              <img src="#" />
              <span>1</span>
            </span>

            <span>Mobile</span>
          </li>

          <li>
            <span>
              <img src="#" />
              <span>1</span>
            </span>

            <span>Backend</span>
          </li>
        </ol>

        <figcaption>{strings.blocks.howWeWork.squad.caption}</figcaption>
      </figure>
    </React.Fragment>
  );
};
