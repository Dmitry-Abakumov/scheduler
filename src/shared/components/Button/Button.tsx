import { EventHandler, ReactNode, MouseEvent } from "react";

import css from "./Button.module.css";

type Props = {
  type: "button" | "reset" | "submit";
  children: ReactNode;
  className?: string;
  onClick?: EventHandler<MouseEvent<HTMLButtonElement>>;
};

const Button = ({ type, onClick, className, children }: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className ? `${css.btn} ${className}` : `${css.btn}`}
    >
      {children}
    </button>
  );
};

export default Button;
