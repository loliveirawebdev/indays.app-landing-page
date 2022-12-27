import React from "react";
import { useLocale } from "../hooks/locale";
import { useNeedHelp } from "../hooks/needHelp";
import { useSectionsRefs } from "../hooks/refs";
import style from "../styles/NeedHelp.module.scss";

export const NeedHelp: React.FC = () => {
  const { strings } = useLocale();
  const { refs } = useSectionsRefs();
  const { shouldBeVisible } = useNeedHelp();

  const goToContactSection = () => {
    const matchedRef = refs.find((ref) => ref.key === "contact");
    matchedRef?.ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!shouldBeVisible) {
    return null;
  }

  return (
    <button type="button" onClick={goToContactSection} itemScope itemProp="helper" className={style.contactUsHelper}>
      {strings.general.needHelp}
    </button>
  );
};
