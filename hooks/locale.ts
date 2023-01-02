import { LocalesMap, RoutesMap } from "../i18n";
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

export function useRouteConfig(page: keyof typeof RoutesMap) {
  const { locale, defaultLocale } = useRouter();

  function getLocale() {
    return locale || defaultLocale || "pt-BR";
  }

  function getCurrentRoute() {
    const locale = getLocale();
    const route = RoutesMap[page][getLocale()];

    return locale === "pt-BR" ? route : `${locale}/${route}`;
  }

  return {
    currentRoute: getCurrentRoute(),
    alternates: RoutesMap[page],
  };
}
