import { nanoid } from "nanoid";
import { Field } from "formik";

import css from "./TextField.module.css";

type Props = {
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

const TextField = ({ label, ...props }: Props) => {
  const id = nanoid();
  return (
    <div>
      <label htmlFor={id} className={css.label}>
        {label}
      </label>
      <Field {...props} id={id} className={css.input} />
    </div>
  );
};

export default TextField;
