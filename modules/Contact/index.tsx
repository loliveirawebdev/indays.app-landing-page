import React from "react";
import i18n from "./i18n";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { useNeedHelp } from "../../hooks/needHelp";
import { useSectionsRefs } from "../../hooks/refs";
import { useIsInViewport } from "../../hooks/viewport";
const ContactForm = dynamic(() => import("./containers/ContactForm").then((mod) => mod.ContactForm), { ssr: false });

const Contact: React.FC = () => {
  const { locale } = useRouter();
  const { registerRef } = useSectionsRefs();

  const strings = i18n(locale);
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

        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
