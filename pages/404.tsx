import { Logo } from "../components/Logo";
import { useLocale } from "../hooks/locale";
import style from "../styles/ErrorMessage.module.scss";

export default function Custom404() {
  const { strings } = useLocale();

  return (
    <div className={style.errorMessage}>
      <div className="error-message--inner-container">
        <Logo />
        <p>{strings.page["not-found"].message}</p>
        <a href="https://indays.app">{strings.page["not-found"].action}</a>
      </div>
    </div>
  );
}
