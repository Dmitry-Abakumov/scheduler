import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiUser3Fill } from "react-icons/ri";

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
        <TextField {...fields.login}>
          <RiUser3Fill className={`commonIcon ${css.icon}`} />
        </TextField>
        <TextField {...fields.email}>
          <RiMailFill className={`commonIcon ${css.icon}`} />
        </TextField>
        <TextField {...fields.password}>
          <RiLockPasswordFill className={`commonIcon ${css.icon}`} />
        </TextField>

        <Button type="submit" className={css.registerBtn}>
          Register
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
