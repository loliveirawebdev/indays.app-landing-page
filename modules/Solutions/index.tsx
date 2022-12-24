import React from "react";
import { useLocale } from "../../hooks/locale";
import { renderServiceItems } from "./helpers/renderServiceItems";
import { renderToolList } from "./helpers/renderToolList";

const Solutions: React.FC = () => {
  const { strings } = useLocale();

  return (
    <article>
      <h3>{strings.blocks.solutions.title}</h3>

      <ul itemScope itemType="https://schema.org/ItemList" itemProp="serviceList">
        {renderServiceItems(strings.blocks.solutions.items)}
      </ul>

      <section itemScope>
        <p>{strings.blocks.solutions.tools.title}</p>

        <section itemScope>
          <p>{strings.blocks.solutions.tools.highlight.title}</p>

          <ul itemScope itemType="https://schema.org/ItemList">
            {renderToolList(strings.blocks.solutions.tools.highlight.items)}
          </ul>
        </section>

        <section itemScope>
          <p>{strings.blocks.solutions.tools.others.title}</p>

          <ul itemScope itemType="https://schema.org/ItemList">
            {renderToolList(strings.blocks.solutions.tools.others.items)}
          </ul>
        </section>
      </section>
    </article>
  );
};

export default Solutions;
