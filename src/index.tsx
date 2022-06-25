import React from "react";

interface Props {
  child: string;
}
export const TestingComponent = ({ child }: Props): JSX.Element => {
  return <div>Testing Component: {child}</div>;
};

export { A, B, C } from "./core";
