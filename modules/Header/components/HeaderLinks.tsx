import { v4 as uuid } from "uuid";

interface Props {
  items: Header.MenuItem[];
}

export const HeaderLinks: React.FC<Props> = ({ items }) => {
  const renderMenuItems = (): React.ReactNode =>
    items.map((item) => {
      const uniqueKey = uuid();
      const { label } = item;

      return (
        <li key={uniqueKey}>
          <button type="button">{label}</button>
        </li>
      );
    });

  return <menu>{renderMenuItems()}</menu>;
};
