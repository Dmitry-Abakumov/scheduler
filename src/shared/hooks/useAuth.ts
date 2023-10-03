import { useSelector } from "react-redux/es/hooks/useSelector";

import {
  getIsLoggedIn,
  getIsloading,
  getToken,
  getUser,
} from "../../redux/auth/authSelectors";

const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isLoading = useSelector(getIsloading);
  const token = useSelector(getToken);

  return { user, isLoading, isLoggedIn, token };
};

export default useAuth;
