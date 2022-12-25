import ptBR from "./strings/pt-BR.json";
import enUS from "./strings/en-US.json";
import { parseStringsAsHtml } from "./helpers/parseStringsAsHtml";

export const LocalesMap: Record<string, typeof ptBR> = {
  "pt-BR": parseStringsAsHtml(ptBR),
  en: parseStringsAsHtml(enUS),
};
