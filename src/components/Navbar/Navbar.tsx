import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { SiTodoist } from "react-icons/si";

import Button from "../../shared/components/Button";

import useAuth from "../../shared/hooks/useAuth";

import { fetchLogout } from "../../redux/auth/authOperations";

import css from "./Navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navbarWrap}>
      <NavLink to="/home">
        <SiTodoist size="20px" className={css.logoIcon} />
      </NavLink>
      <NavLink to="/home" className={css.menu}>
        Home
      </NavLink>

      {isLoggedIn && (
        <>
          <NavLink to="/tasks" className={css.menu}>
            Tasks
          </NavLink>
          <Button type="button" onClick={() => dispatch(fetchLogout())}>
            Logout
          </Button>
        </>
      )}

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
