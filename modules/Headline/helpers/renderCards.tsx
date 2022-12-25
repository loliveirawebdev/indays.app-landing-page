import { v4 as uuid } from "uuid";

export const renderCards = (cards: Headline.Card[]): React.ReactNode => {
  return cards.map((card) => {
    const uniqueKey = uuid();

    return (
      <article itemScope itemProp="strength" key={uniqueKey} className={card.className}>
        <img src="#" alt={card.iconKey} itemProp="icon" />
        {card.label}
      </article>
    );
  });
};
