import React from "react";
import { useLocale } from "../hooks/locale";
import { useNeedHelp } from "../hooks/needHelp";
import { useSectionsScroll } from "../hooks/pageScroll";
import style from "../styles/NeedHelp.module.scss";

export const NeedHelp: React.FC = () => {
  const { strings } = useLocale("home");
  const { shouldBeVisible } = useNeedHelp();
  const { scrollToContact } = useSectionsScroll();

  if (!shouldBeVisible) {
    return null;
  }

  return (
    <button type="button" onClick={scrollToContact} itemScope itemProp="helper" className={style.contactUsHelper}>
      {strings.general.needHelp}
    </button>
  );
};
