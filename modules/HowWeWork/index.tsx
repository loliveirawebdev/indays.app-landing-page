import React from "react";
import { useLocale } from "../../hooks/locale";
import { SquadBlock } from "./components/SquadBlock";
import { renderParagraphs } from "../../helpers/renderParagraphs";
import { renderTimelineSteps } from "./helpers/renderTimelineSteps";

const HowWeWork: React.FC = () => {
  const { strings } = useLocale();

  return (
    <article>
      <h3>{strings.blocks.howWeWork.title}</h3>
      {renderParagraphs(strings.blocks.howWeWork.paragraphs)}

      <section>
        <ol>{renderTimelineSteps(strings.blocks.howWeWork.processTimeline)}</ol>
      </section>

      <SquadBlock />

      <footer>
        <p>{strings.blocks.howWeWork.footer.text}</p>
        <a href="#">{strings.blocks.howWeWork.footer.action}</a>
      </footer>
    </article>
  );
};

export default HowWeWork;
