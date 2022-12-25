import { v4 as uuid } from "uuid";

export const renderTimelineSteps = (steps: Record<any, any>[]): React.ReactNode => {
  return steps.map((step) => {
    const uniqueKey = uuid();

    return (
      <li itemProp="itemListElement" key={uniqueKey}>
        <h5 itemProp="title">{step.title}</h5>
        <p itemProp="description">{step.description}</p>
      </li>
    );
  });
};
