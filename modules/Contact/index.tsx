import React from "react";
import { useLocale } from "../../hooks/locale";

const Contact: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section>
      <p>{strings.blocks.contact.title}</p>
      <p>{strings.blocks.contact.description}</p>

      <footer>
        <p>{strings.blocks.contact.actionDescription}</p>
        <button type="button">{strings.blocks.contact.action}</button>
      </footer>
    </section>
  );
};

export default Contact;
