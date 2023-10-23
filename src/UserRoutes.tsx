import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const TaskPage = lazy(() => import("./pages/TaskPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/tasks" element={<TaskPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
