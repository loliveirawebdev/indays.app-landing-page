import React from "react";
import { v4 as uuid } from "uuid";
import { useRecoilState } from "recoil";
import { useLocale } from "../../../hooks/locale";
import { useSectionsRefs } from "../../../hooks/refs";
import { IS_FORM_CONTACT_SENT } from "../../../atoms/contact";
import { useFormSubmit, useQuestions } from "../hooks/questions";

export const ContactForm: React.FC = () => {
  const [isFormSent] = useRecoilState(IS_FORM_CONTACT_SENT);
  const containerClass = isFormSent ? `contact-form-container__is-sent` : "";

  const { config, inputRenderer } = useQuestions();
  const onSubmit = useFormSubmit();
  const { strings } = useLocale();

  const { registerRef } = useSectionsRefs();
  const ref = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    registerRef("contact-form", ref);
  }, [ref]);

  const renderForm = () => {
    return config.map((question) => {
      const input = inputRenderer(question);

      return (
        <fieldset key={uuid()} itemScope itemProp="question">
          <legend itemProp="legend">{question.legend}</legend>
          {input}
        </fieldset>
      );
    });
  };

  return (
    <div className={containerClass}>
      <div className="contact-form-sent">
        <p>{strings.blocks.contact.form.success.title}</p>
        <p>{strings.blocks.contact.form.success.description}</p>
      </div>

      <form ref={ref} onSubmit={onSubmit} itemScope itemProp="contactForm" className="contact-form">
        {renderForm()}
        <button type="submit">oi</button>
      </form>
    </div>
  );
};
