import { NavLink } from "react-router-dom";

import { SiTodoist } from "react-icons/si";

import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";

import Container from "../../shared/components/Container";

import useAuth from "../../shared/hooks/useAuth";

import css from "./Navbar.module.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navbarWrap}>
      <Container className={css.container}>
        <NavLink to="/home">
          <SiTodoist size="20px" className={css.logoIcon} />
        </NavLink>
        <NavLink to="/home" className={css.menu}>
          Home
        </NavLink>
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <AuthMenu />}
      </Container>
    </div>
  );
};

export default Navbar;
