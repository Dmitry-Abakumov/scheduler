import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import { fetchLogout } from "../../../redux/auth/authOperations";

import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={css.userMenuWrap}>
      <button
        type="button"
        onClick={() => dispatch(fetchLogout())}
        className={`${css.logout} ${css.btnReset}`}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
