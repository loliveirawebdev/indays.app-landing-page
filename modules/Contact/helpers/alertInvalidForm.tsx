import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import ptBR from "../../../i18n/strings/pt-BR.json";
type Props = { formErrors: Contact.FormError[]; strings: typeof ptBR };

const AlertErrorContent: React.FC<Props> = (props) => {
  const { formErrors, strings } = props;
  const { error, questions } = strings.blocks.contact.form;

  const getQuestionByField = (field: keyof typeof questions) => questions[field].legend;
  const invalidQuestionsList = formErrors.map((error) => getQuestionByField(error.field as any));

  return (
    <div className="contact-form--error-alert-content">
      <span>{error.title}</span>
      <p>{error.description}</p>

      <ul>
        {invalidQuestionsList.map((question) => (
          <li key={uuid()}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export const alertInvalidForm = (props: Props) => {
  toast.error(<AlertErrorContent {...props} />, {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "colored",
  });
};
