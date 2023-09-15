import Navbar from "../Navbar";
import UserRoutes from "../../UserRoutes";

import css from "./App.module.css";

const App = () => {
  return (
    <>
      <Navbar />
      <div className={css.container}>
        <UserRoutes />
      </div>
    </>
  );
};

export default App;
