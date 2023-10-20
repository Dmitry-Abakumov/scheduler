import LoginForm from "../../components/LoginForm";

import Container from "../../shared/components/Container";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.pageWrapper}>
      <Container className={css.container}>
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
