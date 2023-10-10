import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

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
        <TextField {...fields.email} />
        <TextField {...fields.password} />
        <Button type="submit" className={css.loginBtn}>
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
