import { nanoid } from "nanoid";
import { Field } from "formik";
import { ChangeEvent, ReactNode } from "react";

import css from "./TextField.module.css";

type Props = {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
};

const TextField = ({ label, children, ...props }: Props) => {
  const id = nanoid();
  return (
    <div className={css.textFieldWrap}>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <div className={css.inputIconWrapper}>
        <Field {...props} id={id} className={css.input} />
        {children}
      </div>
    </div>
  );
};

export default TextField;
