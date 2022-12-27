import { useLocale } from "../hooks/locale";
import style from "../styles/NeedHelp.module.scss";

export const NeedHelp: React.FC = () => {
  const { strings } = useLocale();

  return (
    <div itemScope itemProp="helper" className={style.contactUsHelper}>
      {strings.general.needHelp}
    </div>
  );
};
