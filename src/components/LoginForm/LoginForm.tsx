import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { fetchLogin } from "../../redux/auth/authOperations";

import fields from "./fields";

import css from "./LoginForm.module.css";

interface Values {
  email: string;
  password: string;
}

const initialFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={(values: Values, { resetForm }) => {
        dispatch(fetchLogin(values));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <Field {...fields.email} className={css.input} />
        <Field {...fields.password} className={css.input} />
        <button type="submit" className={css.btn}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
