import { v4 as uuid } from "uuid";

export const renderServiceItems = (items: Record<any, any>[]): React.ReactNode => {
  return items.map((item) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement" itemScope itemType="https://schema.org/Service">
        <hgroup>
          <h4 itemProp="name">{item.title}</h4>
          <p itemProp="description">{item.description}</p>
        </hgroup>
      </li>
    );
  });
};
