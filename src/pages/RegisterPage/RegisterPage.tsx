import RegisterForm from "../../components/RegisterForm";

import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.pageWrapper}>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
