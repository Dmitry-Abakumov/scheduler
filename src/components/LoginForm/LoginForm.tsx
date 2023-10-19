import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { RiLockPasswordFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiLoginCircleFill } from "react-icons/ri";

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
        <TextField {...fields.email}>
          <RiMailFill className={`commonIcon ${css.icon}`} />
        </TextField>
        <TextField {...fields.password}>
          <RiLockPasswordFill className={`commonIcon ${css.icon}`} />
        </TextField>
        <Button type="submit" className={css.loginBtn}>
          Login
          <RiLoginCircleFill size="15" className="commonIcon" />
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
