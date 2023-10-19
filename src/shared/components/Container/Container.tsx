import { ReactNode } from "react";

import css from "./Container.module.css";

type Props = {
  children: ReactNode;
  className: string;
};

const Container = ({ children, className }: Props) => {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

export default Container;
