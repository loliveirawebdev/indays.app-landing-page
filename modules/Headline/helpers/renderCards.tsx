import { v4 as uuid } from "uuid";

export const renderCards = (cards: Headline.Card[]): React.ReactNode => {
  return cards.map((card) => {
    const uniqueKey = uuid();

    return (
      <article itemScope itemProp="strength" key={uniqueKey} className={card.className}>
        <div className="card--container">
          <img
            width="2.4rem"
            height="2.4rem"
            itemProp="icon"
            alt={card.iconKey}
            src={`/assets/cards/${card.iconKey}.svg`}
          />
          {card.label}
        </div>
      </article>
    );
  });
};
