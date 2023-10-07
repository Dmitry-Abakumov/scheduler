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
    <>
      <label htmlFor={id}>{label}</label>
      <Field {...props} className={css.input} />
    </>
  );
};

export default TextField;
