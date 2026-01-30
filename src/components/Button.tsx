import React from "react";
import { type MouseEvent } from "react";
interface Props {
    children: string
    onClick: (ev: MouseEvent) => void
    color?: "primary" | "secondary"
}

const Button = ({children, onClick, color="primary"}: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>
  );
};

export default Button;
