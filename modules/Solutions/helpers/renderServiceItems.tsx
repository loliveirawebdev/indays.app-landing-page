import { v4 as uuid } from "uuid";

export const renderServiceItems = (items: string[]): React.ReactNode => {
  return items.map((item) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement" itemScope itemType="https://schema.org/Service">
        <hgroup>
          <h4 itemProp="name">{item}</h4>
        </hgroup>
      </li>
    );
  });
};
