import { Outlet, Navigate } from "react-router-dom";

import useAuth from "../../shared/hooks/useAuth";

const PublicRoute = () => {
  const { token, isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to="/tasks" />;

  if (!isLoggedIn && token) return <p>Loading...</p>;

  return <Outlet />;
};

export default PublicRoute;
