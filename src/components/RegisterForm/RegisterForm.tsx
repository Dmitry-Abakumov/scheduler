import { useState } from "react";
import fields from "./fields";

const initialFields = {
  login: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const [inputsData, setInputsData] = useState(initialFields);

  const onChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { login, email, password } = inputsData;

  return (
    <form>
      <input type="text" {...fields.login} onChange={onChange} value={login} />
      <input type="email" {...fields.email} onChange={onChange} value={email} />
      <input
        type="text"
        {...fields.password}
        onChange={onChange}
        value={password}
      />
    </form>
  );
};

export default RegisterForm;
