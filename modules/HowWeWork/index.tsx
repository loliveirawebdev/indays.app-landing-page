import React from "react";
import { useLocale } from "../../hooks/locale";
import { SquadBlock } from "./components/SquadBlock";
import styles from "../../styles/HowWeWork.module.scss";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { renderTimelineSteps } from "./helpers/renderTimelineSteps";

const HowWeWork: React.FC = () => {
  const { strings } = useLocale();

  return (
    <article itemScope itemProp="howWeWork" className={styles.howWeWork}>
      <div className="howWeWork--content-container">
        <h3 itemProp="title" className="section-title">
          {strings.blocks.howWeWork.title}
        </h3>

        {renderParagraphs(strings.blocks.howWeWork.paragraphs)}

        <section itemScope itemProp="timeline" className="howWeWork--timeline">
          <ol itemProp="stepList" itemType="https://schema.org/ItemList">
            {renderTimelineSteps(strings.blocks.howWeWork.processTimeline)}
          </ol>
        </section>

        <SquadBlock />

        <footer itemScope itemProp="callToAction">
          <p>{strings.blocks.howWeWork.footer.text}</p>

          <a href="#" itemProp="link">
            {strings.blocks.howWeWork.footer.action}
          </a>
        </footer>
      </div>
    </article>
  );
};

export default HowWeWork;
