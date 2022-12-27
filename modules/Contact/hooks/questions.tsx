import { useLocale } from "../../../hooks/locale";
import { useSectionsScroll } from "../../../hooks/pageScroll";
import { alertInvalidForm } from "../helpers/alertInvalidForm";
import { renderInputForQuestion } from "../helpers/renderInput";
import { runFormValidation } from "../helpers/runFormValidation";

export function useQuestions() {
  const { strings } = useLocale();
  const { questions } = strings.blocks.contact.form;
  const renderer = (question: Contact.FormQuestion) => renderInputForQuestion(question, strings.general.other);

  const baseConfig: Contact.FormQuestion[] = [
    {
      key: "applicationType",
      type: "premade-options",
      legend: questions.applicationType.legend,
      options: questions.applicationType.options,
    },

    {
      key: "start",
      type: "premade-options",
      legend: questions.start.legend,
      options: questions.start.options,
    },

    {
      key: "budget",
      type: "user-input",
      legend: questions.budget.legend,
    },

    {
      key: "youAre",
      type: "premade-options",
      legend: questions.youAre.legend,
      options: questions.youAre.options,
    },

    {
      key: "name",
      type: "user-input",
      legend: questions.name.legend,
    },

    {
      key: "email",
      type: "user-input",
      legend: questions.email.legend,
    },

    {
      key: "more",
      type: "user-input",
      legend: questions.more.legend,
    },
  ];

  return {
    config: baseConfig,
    inputRenderer: renderer,
  };
}

export function useFormSubmit() {
  const { strings } = useLocale();
  const { scrollToContactForm } = useSectionsScroll();

  const onFormError = (formErrors: Contact.FormError[]) => {
    scrollToContactForm();
    alertInvalidForm({ formErrors, strings });
  };

  const sendFormData = (formData: Contact.FormData) => {
    console.log("sent", formData);
  };

  return (e: any) => {
    e.preventDefault();

    const formData: Contact.FormData = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      youAre: e.target.elements.youAre.value,
      applicationType: e.target.elements.applicationType.value,
      start: e.target.elements.start.value,
      budget: e.target.elements.budget.value,
      more: e.target.elements.more.value,
    };

    const formErrors = runFormValidation(formData);
    if (formErrors.length) return onFormError(formErrors);
    return sendFormData(formData);
  };
}
