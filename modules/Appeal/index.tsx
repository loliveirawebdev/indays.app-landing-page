import React from "react";
import { useLocale } from "../../hooks/locale";
import { Button } from "../../components/Button";
import styles from "../../styles/Appeal.module.scss";
import { useSectionsScroll } from "../../hooks/pageScroll";

const Appeal: React.FC = () => {
  const { strings } = useLocale();
  const { scrollToContact } = useSectionsScroll();

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

          <Button onClick={scrollToContact} variant="secondary" itemProp="contactButton">
            {strings.blocks.appeal.action}
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default Appeal;
