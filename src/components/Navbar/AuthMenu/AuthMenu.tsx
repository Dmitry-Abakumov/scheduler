import { NavLink } from "react-router-dom";

import css from "./AuthMenu.module.css";

const AuthMenu = () => {
  return (
    <div className={css.authContainer}>
      <NavLink to="/login" className={css.menu}>
        Login
      </NavLink>
      <NavLink to="/register" className={css.menu}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthMenu;
