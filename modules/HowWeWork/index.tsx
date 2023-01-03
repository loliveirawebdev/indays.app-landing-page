import React from "react";
import { useLocale } from "../../hooks/locale";
import { SquadBlock } from "./components/SquadBlock";
import styles from "../../styles/HowWeWork.module.scss";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { renderTimelineSteps } from "./helpers/renderTimelineSteps";

const HowWeWork: React.FC = () => {
  const { strings } = useLocale("howWeWork");

  return (
    <article itemScope itemProp="howWeWork" className={styles.howWeWork}>
      <div className="howWeWork--content-container">
        <h1 itemProp="title" className="section-title">
          {strings.title}
        </h1>

        <h2 itemProp="subtitle" className="section-subtitle">
          {strings.subtitle}
        </h2>

        <hr className="section-divider" />

        {renderParagraphs(strings.paragraphs)}

        <section itemScope itemProp="timeline" className="howWeWork--timeline">
          <ol itemProp="stepList" itemType="https://schema.org/ItemList">
            {renderTimelineSteps(strings.processTimeline)}
          </ol>
        </section>

        <SquadBlock />

        <footer itemScope itemProp="callToAction">
          <p>{strings.footer.text}</p>

          <a href="/pdf/Apresentação [indays.app].pdf" target="_blank" rel="nofollow" itemProp="link">
            {strings.footer.action}
          </a>
        </footer>
      </div>
    </article>
  );
};

export default HowWeWork;
