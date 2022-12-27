import { useQuestions } from "../hooks/questions";
import { renderInputForQuestion } from "../helpers/renderInput";

export const ContactForm: React.FC = () => {
  const questions = useQuestions();

  const renderForm = () => {
    return questions.map((question) => {
      const input = renderInputForQuestion(question);

      return (
        <fieldset itemScope itemProp="question">
          <legend itemProp="legend">{question.legend}</legend>
          {input}
        </fieldset>
      );
    });
  };

  return (
    <form itemScope itemProp="contactForm" className="contact-form">
      {renderForm()}
    </form>
  );
};
