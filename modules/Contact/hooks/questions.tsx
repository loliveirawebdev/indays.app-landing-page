import { useLocale } from "../../../hooks/locale";
import { renderInputForQuestion } from "../helpers/renderInput";

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
}
