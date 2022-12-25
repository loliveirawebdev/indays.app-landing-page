import React from "react";
import { useLocale } from "../../hooks/locale";

const Appeal: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section itemScope>
      <hgroup itemProp="appeal">
        <h1 itemProp="headline">{strings.blocks.appeal.title}</h1>
        <p itemProp="message">{strings.blocks.appeal.subtitle}</p>
      </hgroup>

      <footer>
        <p itemProp="description">{strings.blocks.appeal.description}</p>

        <button type="button" itemProp="contactButton">
          {strings.blocks.appeal.action}
        </button>
      </footer>
    </section>
  );
};

export default Appeal;
