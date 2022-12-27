import { v4 as uuid } from "uuid";

const renderCheckboxHTML = (value: string, scope: string) => {
  const uniqueKey = uuid();

  return (
    <div key={uniqueKey} className="contact-form--checkbox" itemScope>
      <input itemProp="radio" name={scope} id={uniqueKey} type="radio" value={value} />

      <label itemProp="label" htmlFor={uniqueKey}>
        {value}
      </label>
    </div>
  );
};

export const renderPremadeOptionsQuestion = (question: Contact.FormQuestion, otherLabel: string) => {
  if (!question.options) throw Error();
  const questionScope = uuid();

  return (
    <>
      {question.options.map((option) => renderCheckboxHTML(option, questionScope))}
      {renderCheckboxHTML(otherLabel, questionScope)}
    </>
  );
};
