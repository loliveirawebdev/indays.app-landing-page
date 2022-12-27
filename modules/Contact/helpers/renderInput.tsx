import { renderPremadeOptionsQuestion } from "./renderPremadeOptionsQuestion";
import { renderUserInputQuestion } from "./renderUserInputQuestion";

export const renderInputForQuestion = (question: Contact.FormQuestion) => {
  if (question.type === "user-input") {
    return renderUserInputQuestion();
  }

  return renderPremadeOptionsQuestion(question);
};
