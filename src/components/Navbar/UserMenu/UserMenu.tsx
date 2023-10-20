import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import Button from "../../../shared/components/Button";

import { fetchLogout } from "../../../redux/auth/authOperations";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <NavLink to="/tasks" className={css.menu}>
        Tasks
      </NavLink>
      <Button type="button" onClick={() => dispatch(fetchLogout())}>
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;
