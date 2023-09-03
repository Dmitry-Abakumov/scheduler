import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const TaskPage = lazy(() => import("./pages/TaskPage"));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/tasks" element={<TaskPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
