import React from "react";

export const renderUserInputQuestion = (scope: string) => {
  return <input name={scope} id={scope} type="text" itemProp="input" />;
};
