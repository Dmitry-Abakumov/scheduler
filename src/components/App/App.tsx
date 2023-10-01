import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import Navbar from "../Navbar";
import UserRoutes from "../../UserRoutes";

import { fetchCurrent } from "../../redux/auth/authOperations";

import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrent());
  });

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
