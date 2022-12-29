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
      <div className="headline--content-container">
        <aside itemScope itemProp="strengths">
          <div className="strengths--left-col">{renderCards(cards.slice(0, 2))}</div>
          <div className="strengths--right-col">{renderCards(cards.slice(2))}</div>
        </aside>

        <header itemScope itemProp="headline">
          <h1 itemProp="merit">{strings.blocks.headline.title}</h1>
          <h2 itemProp="merit">{strings.blocks.headline.subtitle}</h2>
        </header>

        <section itemScope itemProp="content" className="headline--content">
          {renderParagraphs(strings.blocks.headline.paragraphs)}
        </section>
      </div>
    </article>
  );
};

export default Headline;
