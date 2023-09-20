import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const TaskPage = lazy(() => import("./pages/TaskPage"));
const LoginPage = lazy(() => import("./pages/LiginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
