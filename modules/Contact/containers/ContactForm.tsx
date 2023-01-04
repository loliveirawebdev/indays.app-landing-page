import React from "react";
import i18n from "../i18n";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { Button } from "../../../components/Button";
import { useSectionsRefs } from "../../../hooks/refs";
import { usePageScroll } from "../../../hooks/pageScroll";
import { useFormSubmit, useQuestions } from "../hooks/questions";
import { IS_FORM_CONTACT_OPEN, IS_FORM_CONTACT_SENT } from "../../../atoms/contact";

export const ContactForm: React.FC = () => {
  const [isFormSent] = useRecoilState(IS_FORM_CONTACT_SENT);
  const [isFormOpen, setIsFormOpen] = useRecoilState(IS_FORM_CONTACT_OPEN);

  const { locale } = useRouter();
  const { registerRef } = useSectionsRefs();
  const { config, inputRenderer } = useQuestions();
  const { blockScroll, unblockScroll } = usePageScroll();

  const strings = i18n(locale);
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
          <label className="contact-form--question-title" htmlFor={question.key} itemProp="legend">
            {question.legend}
          </label>
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
      <div className="contact-form--header" itemScope itemProp="actions">
        <Button variant="tertiary" type="button" onClick={onCloseForm} itemProp="backButton">
          {strings.form.actions.back}
        </Button>
      </div>

      <div className="contact-form--open-helper" itemScope>
        <div className="open-helper--backdrop" itemProp="backdrop">
          <Button variant="secondary" type="button" onClick={onOpenForm} itemProp="button">
            {strings.form.actions.open}
          </Button>
        </div>
      </div>

      <div className="contact-form--sent" itemScope>
        <p itemProp="information">{strings.form.success.title}</p>
        <p itemProp="information">{strings.form.success.description}</p>
      </div>

      <form ref={ref} onSubmit={onSubmit} itemScope itemProp="contactForm" className="contact-form">
        {renderForm()}
        <p className="contact-form--policy">{strings.form.policy}</p>

        <Button itemProp="submit" type="submit">
          {strings.form.actions.send}
        </Button>
      </form>
    </div>
  );
};
