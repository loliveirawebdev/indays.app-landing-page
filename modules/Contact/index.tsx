import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Contact.module.scss";

const Contact: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section itemScope itemProp="contact" className={styles.contact}>
      <p itemProp="title">{strings.blocks.contact.title}</p>
      <p itemProp="info">{strings.blocks.contact.description}</p>

      <footer>
        <p itemProp="description">{strings.blocks.contact.actionDescription}</p>

        <button type="button" itemProp="openForm">
          {strings.blocks.contact.action}
        </button>
      </footer>
    </section>
  );
};

export default Contact;
