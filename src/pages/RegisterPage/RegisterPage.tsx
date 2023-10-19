import RegisterForm from "../../components/RegisterForm";

import Container from "../../shared/components/Container";

import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <Container className={css.pageWrapper}>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;
