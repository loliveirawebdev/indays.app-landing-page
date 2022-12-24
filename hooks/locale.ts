import { useRouter } from "next/router";
import { LocalesMap } from "../i18n";

export function useLocale() {
  try {
    const { locale, defaultLocale } = useRouter();

    if (locale) return LocalesMap[locale];
    return LocalesMap[defaultLocale!];
  } catch {
    return LocalesMap["pt-BR"];
  }
}
