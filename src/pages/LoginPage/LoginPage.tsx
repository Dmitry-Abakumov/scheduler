import LoginForm from "../../components/LoginForm";

import Container from "../../shared/components/Container";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <Container className={css.pageWrapper}>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
