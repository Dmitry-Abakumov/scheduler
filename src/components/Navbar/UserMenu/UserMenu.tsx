import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import useAuth from "../../../shared/hooks/useAuth";

import { fetchLogout } from "../../../redux/auth/authOperations";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { login } = useAuth();

  return (
    <div className={css.userMenuWrap}>
      {/* <NavLink to="/tasks" className={css.menu}>
        Tasks
      </NavLink> */}
      Welcome, {login}
      <button
        type="button"
        onClick={() => dispatch(fetchLogout())}
        className={`${css.link} ${css.btnReset}`}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
