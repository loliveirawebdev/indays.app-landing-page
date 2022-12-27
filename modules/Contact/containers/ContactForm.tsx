import React from "react";
import { v4 as uuid } from "uuid";
import { useSectionsRefs } from "../../../hooks/refs";
import { useFormSubmit, useQuestions } from "../hooks/questions";

export const ContactForm: React.FC = () => {
  const { config, inputRenderer } = useQuestions();
  const onSubmit = useFormSubmit();

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
    <form ref={ref} onSubmit={onSubmit} itemScope itemProp="contactForm" className="contact-form">
      {renderForm()}
      <button type="submit">oi</button>
    </form>
  );
};
