import { useState } from "react";
import fields from "./fields";

const initialFields = {
  login: "",
  password: "",
};

const LoginForm = () => {
  const [inputsData, setInputsData] = useState(initialFields);

  const onChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputsData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const { login, password } = inputsData;

  return (
    <form>
      <input type="text" {...fields.login} onChange={onChange} value={login} />
      <input
        type="text"
        {...fields.password}
        onChange={onChange}
        value={password}
      />
    </form>
  );
};

export default LoginForm;
