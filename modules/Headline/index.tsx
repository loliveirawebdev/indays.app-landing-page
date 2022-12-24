import React from "react";
import { useLocale } from "../../hooks/locale";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { buildHeadlineCards } from "./helpers/buildHeadlineCards";
import { renderCards } from "./helpers/renderCards";

const Headline: React.FC = () => {
  const { strings } = useLocale();
  const cards = buildHeadlineCards(strings.blocks.headline.cards);

  return (
    <article>
      <header>
        <h1>{strings.blocks.headline.title}</h1>
        <h2>{strings.blocks.headline.subtitle}</h2>
      </header>

      <aside>{renderCards(cards)}</aside>
      <section>{renderParagraphs(strings.blocks.headline.paragraphs)}</section>
    </article>
  );
};

export default Headline;
