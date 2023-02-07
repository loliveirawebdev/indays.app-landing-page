import React from "react";
import { useSetRecoilState } from "recoil";
import { useLocale } from "../../hooks/locale";
import { Button } from "../../components/Button";
import { renderCards } from "./helpers/renderCards";
import styles from "../../styles/Headline.module.scss";
import { usePageScroll } from "../../hooks/pageScroll";
import { IS_FORM_CONTACT_OPEN } from "../../atoms/contact";
import { buildHeadlineCards } from "./helpers/buildHeadlineCards";

const Headline: React.FC = () => {
  const { strings } = useLocale("home");
  const { blockScroll } = usePageScroll();
  const setIsFormOpen = useSetRecoilState(IS_FORM_CONTACT_OPEN);
  const cards = buildHeadlineCards(strings.blocks.headline.cards);

  const openForm = () => {
    blockScroll();
    setIsFormOpen(true);
  };

  return (
    <article itemScope itemProp="copywrite" className={styles.headline}>
      <div className="headline--content-container">
        <header itemScope itemProp="headline">
          <h1 itemProp="merit">{strings.blocks.headline.title}</h1>
          <h2 itemProp="merit">{strings.blocks.headline.subtitle}</h2>

          <Button onClick={openForm} variant="primary" type="button" itemProp="form">
            {strings.blocks.headline.action}
          </Button>
        </header>

        <aside itemScope itemProp="strengths">
          <div className="strengths--left-col">{renderCards(cards.slice(0, 2))}</div>
          <div className="strengths--right-col">{renderCards(cards.slice(2))}</div>
        </aside>
      </div>
    </article>
  );
};

export default Headline;
