import React from "react";
import { useLocale } from "../../hooks/locale";
import { useSectionsRefs } from "../../hooks/refs";
import { useNeedHelp } from "../../hooks/needHelp";
import styles from "../../styles/Contact.module.scss";
import { useIsInViewport } from "../../hooks/viewport";

const Contact: React.FC = () => {
  const { strings } = useLocale("contact");
  const { registerRef } = useSectionsRefs();

  const ref = React.useRef<HTMLElement>(null);
  const { isIntersecting } = useIsInViewport(ref);
  const { setContactVisibility } = useNeedHelp();

  React.useEffect(() => {
    setContactVisibility(isIntersecting);
  }, [isIntersecting]);

  React.useEffect(() => {
    registerRef("contact", ref);
  }, [ref]);

  return (
    <section ref={ref} itemScope itemProp="contact" className={styles.contact}>
      <div className="contact--content-container">
        <p itemProp="title" className="section-title">
          {strings.title}
        </p>

        <p itemProp="info" className="contact--description">
          {strings.description}
        </p>
      </div>
    </section>
  );
};

export default Contact;
