import { LocalesMap } from "../i18n";
import { useRouter } from "next/router";

export function useLocale(page: keyof typeof LocalesMap) {
  const { locale, defaultLocale } = useRouter();

  function getLocale() {
    return locale || defaultLocale || "pt-BR";
  }

  function getStrings() {
    return LocalesMap[page][getLocale()];
  }

  return {
    strings: getStrings(),
    locale: getLocale(),
  };
}
