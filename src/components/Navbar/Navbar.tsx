import { NavLink } from "react-router-dom";

import useAuth from "../../shared/hooks/useAuth";

import css from "./Navbar.module.css";
import { getIsLoggedIn } from "../../redux/auth/authSelectors";

const Navbar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navbarWrap}>
      <NavLink to="/home" className={css.menu}>
        Home
      </NavLink>

      {isLoggedIn && <NavLink to="/tasks">Tasks</NavLink>}

      {!isLoggedIn && (
        <>
          <NavLink to="/login" className={css.menu}>
            Login
          </NavLink>
          <NavLink to="/register" className={css.menu}>
            Register
          </NavLink>
        </>
      )}
    </div>
  );
};

export default Navbar;
