export const buildHeadlineCards = (cards: any): Headline.Card[] => {
  return [
    {
      label: cards.first,
      iconKey: "rocket",
      className: "black",
    },
    {
      label: cards.second,
      iconKey: "handshake",
      className: "yellow",
    },
    {
      label: cards.third,
      iconKey: "heart",
      className: "green",
    },
    {
      label: cards.fourth,
      iconKey: "runner",
      className: "gray",
    },
  ];
};
