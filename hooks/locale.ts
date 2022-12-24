import { useRouter } from "next/router";
import { LocalesMap } from "../i18n";

export function useUncontextualizedLocale(locale: string) {
  function getStrings() {
    try {
      return LocalesMap[locale];
    } catch {
      return LocalesMap["pt-BR"];
    }
  }

  return {
    strings: getStrings(),
  };
}

export function useLocale() {
  const { locale, defaultLocale } = useRouter();

  function getLocale() {
    return locale || defaultLocale || "pt-BR";
  }

  function getStrings() {
    return LocalesMap[getLocale()];
  }

  return {
    strings: getStrings(),
    locale: getLocale(),
  };
}
