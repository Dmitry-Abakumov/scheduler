import { NavLink } from "react-router-dom";

import css from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={css.navbarWrap}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default Navbar;
