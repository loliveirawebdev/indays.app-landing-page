import { useLocale } from "../hooks/locale";

export default function Home() {
  const { strings } = useLocale();
  return <h1>{strings.hello}</h1>;
}
