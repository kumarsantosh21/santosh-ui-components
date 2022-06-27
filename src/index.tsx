import React from "react";
import MuiButton from "@mui/material/Button";
interface Props {
  child: string;
}
export const SimpelComponent = ({ child }: Props): JSX.Element => {
  return <div>Simple Component: {child}</div>;
};

export const CheckingmuiButton = ({ child }: Props): JSX.Element => {
  return <MuiButton>Button test: {child}</MuiButton>;
};
export * from "./core";
