import { useLocale } from "../../../hooks/locale";

export function useQuestions(): Contact.FormQuestion[] {
  const { strings } = useLocale();
  const { questions } = strings.blocks.contact.form;

  return [
    {
      type: "premade-options",
      legend: questions.applicationType.legend,
      options: questions.applicationType.options,
      otherStrings: questions.applicationType.other,
    },

    {
      type: "premade-options",
      legend: questions.start.legend,
      options: questions.start.options,
      otherStrings: questions.start.other,
    },

    {
      type: "user-input",
      legend: questions.budget.legend,
    },

    {
      type: "premade-options",
      legend: questions.youAre.legend,
      options: questions.youAre.options,
      otherStrings: questions.youAre.other,
    },

    {
      type: "user-input",
      legend: questions.name.legend,
    },

    {
      type: "user-input",
      legend: questions.email.legend,
    },

    {
      type: "user-input",
      legend: questions.more.legend,
    },
  ];
}
