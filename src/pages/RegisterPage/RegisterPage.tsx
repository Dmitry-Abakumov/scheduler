import RegisterForm from "../../components/RegisterForm";

import Container from "../../shared/components/Container";

import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Container className={css.container}>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegisterPage;
