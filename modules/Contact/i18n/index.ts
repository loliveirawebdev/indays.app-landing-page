import enUS from "./en.json";
import ptBR from "./pt-BR.json";
import { localeSwitcher } from "../../../helpers/localeSwitcher";
import { parseStringsAsHtml } from "../../../helpers/parseStringsAsHtml";

const Locales = {
  "pt-BR": parseStringsAsHtml(ptBR),
  en: parseStringsAsHtml(enUS),
};

export default localeSwitcher<typeof ptBR>(Locales);
