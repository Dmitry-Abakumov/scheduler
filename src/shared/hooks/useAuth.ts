import { useSelector } from "react-redux/es/hooks/useSelector";

import {
  getIsLoggedIn,
  getIsloading,
  getLogin,
  getToken,
  getUser,
} from "../../redux/auth/authSelectors";

const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsloading);
  const token = useSelector(getToken);
  const login = useSelector(getLogin);

  return { user, isLoading, isLoggedIn, token, login };
};

export default useAuth;
