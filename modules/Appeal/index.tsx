import React from "react";
import { Button } from "../../components/Button";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Appeal.module.scss";

const Appeal: React.FC = () => {
  const { strings } = useLocale();

  return (
    <section itemScope className={styles.appeal}>
      <div className="appeal--content-container">
        <hgroup itemProp="appeal">
          <h5 itemProp="headline" className="regular-text">
            {strings.blocks.appeal.title}
          </h5>

          <p itemProp="message">{strings.blocks.appeal.subtitle}</p>
        </hgroup>

        <footer className="appeal--footer">
          <p itemProp="description">{strings.blocks.appeal.description}</p>

          <Button variant="secondary" itemProp="contactButton">
            {strings.blocks.appeal.action}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default Appeal;
