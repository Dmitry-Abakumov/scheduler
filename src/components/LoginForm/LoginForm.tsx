import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { fetchLogin } from "../../redux/auth/authOperations";

import fields from "./fields";

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
      <Form>
        <Field {...fields.email} />
        <Field {...fields.password} />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
