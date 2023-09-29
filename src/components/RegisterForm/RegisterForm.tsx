import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { fetchRegister } from "../../redux/auth/authOperations";

import fields from "./fields";

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
      onSubmit={(values: Values, { resetForm }) => {
        dispatch(fetchRegister(values));
        resetForm();
      }}
    >
      <Form>
        <Field {...fields.login} />
        <Field {...fields.email} />
        <Field {...fields.password} />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
