import React from "react";
import { v4 as uuid } from "uuid";
import { useRecoilState } from "recoil";
import { useLocale } from "../../../hooks/locale";
import { useSectionsRefs } from "../../../hooks/refs";
import { IS_FORM_CONTACT_SENT } from "../../../atoms/contact";
import { useFormSubmit, useQuestions } from "../hooks/questions";
import { usePageScroll } from "../../../hooks/pageScroll";
import { Button } from "../../../components/Button";

export const ContactForm: React.FC = () => {
  const [isFormSent] = useRecoilState(IS_FORM_CONTACT_SENT);
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const { strings } = useLocale();
  const { registerRef } = useSectionsRefs();
  const { config, inputRenderer } = useQuestions();
  const { blockScroll, unblockScroll } = usePageScroll();

  const onSubmit = useFormSubmit();
  const ref = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    registerRef("contact-form", ref);
  }, [ref]);

  const onOpenForm = () => {
    blockScroll();
    setIsFormOpen(true);
  };

  const onCloseForm = () => {
    unblockScroll();
    setIsFormOpen(false);
  };

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

  const generateContainerClasses = () => {
    const classList = ["contact-form--container"];

    if (isFormSent) classList.push("contact-form--container__is-sent");

    if (isFormOpen) classList.push("contact-form--container__is-open");
    else classList.push("contact-form--container__is-closed");

    return classList.join(" ");
  };

  return (
    <div className={generateContainerClasses()}>
      <div className="contact-form--header">
        <Button variant="tertiary" type="button" onClick={onCloseForm}>
          {strings.blocks.contact.form.actions.back}
        </Button>
      </div>

      <div className="contact-form--open-helper">
        <div className="open-helper--backdrop">
          <Button variant="secondary" type="button" onClick={onOpenForm}>
            {strings.blocks.contact.form.actions.open}
          </Button>
        </div>
      </div>

      <div className="contact-form--sent">
        <p>{strings.blocks.contact.form.success.title}</p>
        <p>{strings.blocks.contact.form.success.description}</p>
      </div>

      <form ref={ref} onSubmit={onSubmit} itemScope itemProp="contactForm" className="contact-form">
        {renderForm()}
        <Button type="submit">{strings.blocks.contact.form.actions.send}</Button>
      </form>
    </div>
  );
};
