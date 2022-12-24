import React from "react";
import { useLocale } from "../../hooks/locale";

const Appeal: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section>
      <hgroup>
        <h1>{strings.blocks.appeal.title}</h1>
        <p>{strings.blocks.appeal.subtitle}</p>
      </hgroup>

      <footer>
        <p>{strings.blocks.appeal.description}</p>
        <button type="button">{strings.blocks.appeal.action}</button>
      </footer>
    </section>
  );
};

export default Appeal;
