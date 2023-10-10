import { ReactNode } from "react";

import css from "./Button.module.css";

type Props = {
  type: "button" | "reset" | "submit";
  children: ReactNode;
  className?: string;
};

const Button = ({ type, children, className }: Props) => {
  return (
    <button
      type={type}
      className={className ? `${css.btn} ${className}` : `${css.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;
