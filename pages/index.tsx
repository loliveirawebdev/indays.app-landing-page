import { useLocale } from "../hooks/locale";

export default function Home() {
  const locale = useLocale();
  return <h1>{locale.hello}</h1>;
}
