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
        <li key={uniqueKey} itemProp="item">
          <button type="button" itemProp="name">
            {label}
          </button>
        </li>
      );
    });

  return (
    <menu itemScope itemType="https://schema.org/SiteNavigationElement">
      {renderMenuItems()}
    </menu>
  );
};
