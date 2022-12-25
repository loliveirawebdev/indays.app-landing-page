import { v4 as uuid } from "uuid";

interface Props {
  items: Footer.MenuItem[];
}

export const FooterLinks: React.FC<Props> = ({ items }) => {
  const renderMenuItems = (): React.ReactNode =>
    items.map((item) => {
      const uniqueKey = uuid();
      const { link, label } = item;

      return (
        <li itemProp="externalLink" key={uniqueKey}>
          <a href={link} itemProp="link">
            {label}
          </a>
        </li>
      );
    });

  return (
    <nav itemScope itemProp="externalLinks">
      {renderMenuItems()}
    </nav>
  );
};
