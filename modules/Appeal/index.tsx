import React from "react";
import { useLocale } from "../../hooks/locale";
import { Button } from "../../components/Button";
import styles from "../../styles/Appeal.module.scss";
import { useSectionsScroll } from "../../hooks/pageScroll";

const Appeal: React.FC = () => {
  const { strings } = useLocale("home");
  const { scrollToContact } = useSectionsScroll();

  return (
    <section itemScope className={styles.appeal}>
      <div className="appeal--content-container">
        <p itemProp="description">{strings.blocks.appeal.description}</p>

        <Button onClick={scrollToContact} variant="secondary" itemProp="contactButton">
          {strings.blocks.appeal.action}
        </Button>
      </div>
    </section>
  );
};

export default Appeal;
