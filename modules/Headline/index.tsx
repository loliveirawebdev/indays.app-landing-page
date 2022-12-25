import React from "react";
import { useLocale } from "../../hooks/locale";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { buildHeadlineCards } from "./helpers/buildHeadlineCards";
import { renderCards } from "./helpers/renderCards";

const Headline: React.FC = () => {
  const { strings } = useLocale();
  const cards = buildHeadlineCards(strings.blocks.headline.cards);

  return (
    <article itemScope itemProp="copywrite">
      <header itemScope itemProp="headline">
        <h1 itemProp="merit">{strings.blocks.headline.title}</h1>
        <h2 itemProp="merit">{strings.blocks.headline.subtitle}</h2>
      </header>

      <aside itemScope itemProp="strengths">
        {renderCards(cards)}
      </aside>

      <section itemScope itemProp="content">
        {renderParagraphs(strings.blocks.headline.paragraphs)}
      </section>
    </article>
  );
};

export default Headline;
