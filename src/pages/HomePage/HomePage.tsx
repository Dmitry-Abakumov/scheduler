import Container from "../../shared/components/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.heroWrapper}>
      <Container>
        <h1 className={css.heroTitle}>
          Assistant for efficient menegment of your time
        </h1>
      </Container>
    </section>
  );
};

export default HomePage;
