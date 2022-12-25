import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Contact.module.scss";

const Contact: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section itemScope itemProp="contact" className={styles.contact}>
      <div className="contact--content-container">
        <p itemProp="title" className="contact--title">
          {strings.blocks.contact.title}
        </p>

        <p itemProp="info" className="contact--description">
          {strings.blocks.contact.description}
        </p>
      </div>
    </section>
  );
};

export default Contact;
