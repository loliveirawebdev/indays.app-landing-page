import { v4 as uuid } from "uuid";

export const renderToolList = (tools: Record<any, any>[]): React.ReactNode => {
  return tools.map((tool) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement">
        <section itemProp="iconContainer">
          <img
            width="3.5rem"
            height="3.5rem"
            itemProp="icon"
            alt={tool.imageKey}
            src={`/assets/tools/${tool.imageKey}.webp`}
          />
        </section>

        {tool.label}
      </li>
    );
  });
};
