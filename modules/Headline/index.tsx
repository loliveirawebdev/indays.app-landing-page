import React from "react";
import { useLocale } from "../../hooks/locale";
import { renderCards } from "./helpers/renderCards";
import styles from "../../styles/Headline.module.scss";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { buildHeadlineCards } from "./helpers/buildHeadlineCards";

const Headline: React.FC = () => {
  const { strings } = useLocale();
  const cards = buildHeadlineCards(strings.blocks.headline.cards);

  return (
    <article itemScope itemProp="copywrite" className={styles.headline}>
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
