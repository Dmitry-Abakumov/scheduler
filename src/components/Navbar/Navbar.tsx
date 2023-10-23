import { NavLink } from "react-router-dom";
import { SiTodoist } from "react-icons/si";

import UserMenu from "./UserMenu";
import AuthMenu from "./AuthMenu";

import Container from "../../shared/components/Container";

import useAuth from "../../shared/hooks/useAuth";

import items from "./items";

import css from "./Navbar.module.css";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const filteredItems = !isLoggedIn
    ? items.filter((item) => !item.private)
    : items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.navbarWrap}>
      <Container className={css.container}>
        <NavLink to="/">
          <SiTodoist size="20px" className={css.logoIcon} />
        </NavLink>
        {<ul className={css.menu}>{elements}</ul>}
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <AuthMenu />}
      </Container>
    </div>
  );
};

export default Navbar;
