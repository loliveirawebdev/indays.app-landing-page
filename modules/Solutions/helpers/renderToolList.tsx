import { v4 as uuid } from "uuid";

export const renderToolList = (tools: Record<any, any>[], highlighted?: boolean): React.ReactNode => {
  return tools.map((tool) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey} itemProp="itemListElement">
        <section itemProp="iconContainer">
          <img src={`/assets/tools/${tool.imageKey}.svg`} alt={tool.imageKey} itemProp="icon" />
        </section>

        {tool.label}
      </li>
    );
  });
};
