import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { AnyAction } from "@reduxjs/toolkit";

import { fetchLogin, fetchRegister } from "../../redux/auth/authOperations";

import fields from "./fields";

import css from "./RegisterForm.module.css";

interface Values {
  login: string;
  email: string;
  password: string;
}

const initialFields = {
  login: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={async ({ email, login, password }: Values, { resetForm }) => {
        const {
          meta: { requestStatus },
        }: AnyAction = await dispatch(
          fetchRegister({ email, login, password })
        );

        if (requestStatus === "fulfilled") {
          await dispatch(fetchLogin({ email, password }));
        }

        resetForm();
      }}
    >
      <Form className={css.form}>
        <Field {...fields.login} className={css.input} />
        <Field {...fields.email} className={css.input} />
        <Field {...fields.password} className={css.input} />
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
