import React from "react";
import { useLocale } from "../../hooks/locale";
import styles from "../../styles/Solutions.module.scss";
import { renderToolList } from "./helpers/renderToolList";
import { renderServiceItems } from "./helpers/renderServiceItems";

const Solutions: React.FC = () => {
  const { strings } = useLocale();

  return (
    <article itemScope itemProp="solutions" className={styles.solutions}>
      <h3 itemProp="title">{strings.blocks.solutions.title}</h3>

      <ul itemScope itemType="https://schema.org/ItemList" itemProp="serviceList">
        {renderServiceItems(strings.blocks.solutions.items)}
      </ul>

      <section itemScope>
        <p itemProp="title">{strings.blocks.solutions.tools.title}</p>

        <section itemScope>
          <p itemProp="title">{strings.blocks.solutions.tools.highlight.title}</p>

          <ul itemScope itemType="https://schema.org/ItemList">
            {renderToolList(strings.blocks.solutions.tools.highlight.items)}
          </ul>
        </section>

        <section itemScope itemProp="otherTools">
          <p itemProp="title">{strings.blocks.solutions.tools.others.title}</p>

          <ul itemScope itemType="https://schema.org/ItemList">
            {renderToolList(strings.blocks.solutions.tools.others.items)}
          </ul>
        </section>
      </section>
    </article>
  );
};

export default Solutions;
