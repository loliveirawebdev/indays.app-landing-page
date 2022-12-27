import React from "react";
import { useLocale } from "../../hooks/locale";
import { useSectionsRefs } from "../../hooks/refs";
import styles from "../../styles/Contact.module.scss";
import { useIsInViewport } from "../../hooks/viewport";

const Contact: React.FC = () => {
  const { strings } = useLocale();
  const { registerRef } = useSectionsRefs();

  const ref = React.useRef<HTMLElement>(null);
  const { isIntersecting } = useIsInViewport(ref);

  React.useEffect(() => {
    console.log("contact", isIntersecting);
  }, [isIntersecting]);

  React.useEffect(() => {
    registerRef("contact", ref);
  }, [ref]);

  return (
    <section ref={ref} itemScope itemProp="contact" className={styles.contact}>
      <div className="contact--content-container">
        <p itemProp="title" className="section-title">
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
