import { renderPremadeOptionsQuestion } from "./renderPremadeOptionsQuestion";
import { renderUserInputQuestion } from "./renderUserInputQuestion";

export const renderInputForQuestion = (question: Contact.FormQuestion, otherLabel: string) => {
  if (question.type === "user-input") {
    return renderUserInputQuestion(question.key);
  }

  return renderPremadeOptionsQuestion(question, otherLabel);
};
