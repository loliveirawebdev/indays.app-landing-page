import React from "react";
import { useLocale } from "../../hooks/locale";
import { useSectionsRefs } from "../../hooks/refs";
import { useIsInViewport } from "../../hooks/viewport";
import styles from "../../styles/Solutions.module.scss";
import { renderToolList } from "./helpers/renderToolList";
import { renderServiceItems } from "./helpers/renderServiceItems";

const Solutions: React.FC = () => {
  const { strings } = useLocale();
  const { registerRef } = useSectionsRefs();

  const ref = React.useRef<HTMLElement>(null);
  const { isIntersecting } = useIsInViewport(ref);

  React.useEffect(() => {
    console.log("solutions", isIntersecting);
  }, [isIntersecting]);

  React.useEffect(() => {
    registerRef("solutions", ref);
  }, [ref]);

  return (
    <article ref={ref} itemScope itemProp="solutions" className={styles.solutions}>
      <div className="solutions--content-container">
        <h3 itemProp="title" className="section-title">
          {strings.blocks.solutions.title}
        </h3>

        <ul itemScope itemType="https://schema.org/ItemList" itemProp="serviceList" className="solutions--services">
          {renderServiceItems(strings.blocks.solutions.items)}
        </ul>

        <section itemScope className="solutions--tools">
          <p itemProp="title" className="solutions--tools--title">
            {strings.blocks.solutions.tools.title}
          </p>

          <section itemScope className="solutions--tools--highlight">
            <p itemProp="title" className="solutions--tools--highlight--title">
              {strings.blocks.solutions.tools.highlight.title}
            </p>

            <ul itemScope itemType="https://schema.org/ItemList" className="solutions--tools--highlight--list">
              {renderToolList(strings.blocks.solutions.tools.highlight.items)}
            </ul>
          </section>

          <section itemScope itemProp="otherTools" className="solutions--tools--others">
            <p itemProp="title" className="solutions--tools--others--title">
              {strings.blocks.solutions.tools.others.title}
            </p>

            <ul itemScope itemType="https://schema.org/ItemList" className="solutions--tools--others--list">
              {renderToolList(strings.blocks.solutions.tools.others.items)}
            </ul>
          </section>
        </section>
      </div>
    </article>
  );
};

export default Solutions;
