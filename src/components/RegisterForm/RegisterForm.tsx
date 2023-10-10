import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

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
        <TextField {...fields.login} />
        <TextField {...fields.email} />
        <TextField {...fields.password} />
        <Button type="submit" className={css.registerBtn}>
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
