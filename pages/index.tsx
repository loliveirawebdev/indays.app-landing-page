import { useLocale } from "../hooks/locale";
import styles from "../styles/teste.module.scss";

export default function Home() {
  const { strings } = useLocale();
  return <h1 className={styles.teste}>{strings.hello}</h1>;
}
