export const buildHeadlineCards = (strings: any): Headline.Card[] => {
  return [
    {
      label: strings.blocks.headline.cards.first,
      iconKey: "rocket",
      className: "black",
    },
    {
      label: strings.blocks.headline.cards.second,
      iconKey: "handshake",
      className: "yellow",
    },
    {
      label: strings.blocks.headline.cards.third,
      iconKey: "heart",
      className: "green",
    },
    {
      label: strings.blocks.headline.cards.fourth,
      iconKey: "runner",
      className: "gray",
    },
  ];
};
