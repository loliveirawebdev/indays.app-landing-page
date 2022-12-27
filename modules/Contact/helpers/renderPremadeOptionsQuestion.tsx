import { v4 as uuid } from "uuid";

const renderCheckboxHTML = (value: string, scope: string) => {
  const otherUniqueKey = uuid();

  return (
    <div className="contact-form--checkbox" itemScope>
      <input itemProp="radio" name={scope} id={otherUniqueKey} type="radio" value={value} />

      <label itemProp="label" htmlFor={otherUniqueKey}>
        {value}
      </label>
    </div>
  );
};

export const renderPremadeOptionsQuestion = (question: Contact.FormQuestion) => {
  if (!question.options) throw Error();
  const questionScope = uuid();

  const renderOtherInput = () => {
    const otherInputUniqueKey = uuid();

    return (
      <div className="contact-form--checkbox--other-input" itemScope>
        <label itemProp="label" htmlFor={otherInputUniqueKey}>
          {question.otherStrings?.input}
        </label>

        <input id={otherInputUniqueKey} type="text" itemProp="input" />
      </div>
    );
  };

  return (
    <>
      {question.options.map((option) => renderCheckboxHTML(option, questionScope))}
      {renderCheckboxHTML(question.otherStrings?.checkbox!, questionScope)}
      {renderOtherInput()}
    </>
  );
};
