import { v4 as uuid } from "uuid";

export const renderTimelineSteps = (
  steps: Record<any, any>[]
): React.ReactNode => {
  return steps.map((step) => {
    const uniqueKey = uuid();

    return (
      <li key={uniqueKey}>
        <h5>{step.title}</h5>
        <p>{step.description}</p>
      </li>
    );
  });
};
