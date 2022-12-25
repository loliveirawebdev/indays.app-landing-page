import { v4 as uuid } from "uuid";

interface Props {
  items: Header.MenuItem[];
  isMobileCollapsed: boolean;
  collapseMobile: () => void;
}

export const HeaderLinks: React.FC<Props> = (props) => {
  const { items, isMobileCollapsed, collapseMobile } = props;

  const generateClassList = () => {
    const collapsedClass = isMobileCollapsed ? "header--menu__collapsed" : "";
    return `header--menu ${collapsedClass}`;
  };

  const goTo = (area: string) => {
    return () => {
      collapseMobile();
      console.log(area);
    };
  };

  const renderMenuItems = (): React.ReactNode =>
    items.map((item) => {
      const uniqueKey = uuid();
      const { label, action } = item;

      return (
        <li key={uniqueKey} itemProp="item">
          <button type="button" itemProp="name" className="header--menu-item" onClick={goTo(action)}>
            {label}
          </button>
        </li>
      );
    });

  return (
    <div className={generateClassList()}>
      <div className="header--menu--backdrop" onClick={collapseMobile} />

      <menu itemScope itemType="https://schema.org/SiteNavigationElement">
        {renderMenuItems()}
      </menu>
    </div>
  );
};
