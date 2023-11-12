import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import Navbar from "../Navbar";
import UserRoutes from "../../UserRoutes";

import { fetchCurrent } from "../../redux/auth/authOperations";
import TestComponent from "../TestComponent";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCurrent());
  });

  return (
    // <>
    //   <Navbar />
    //   <UserRoutes />
    // </>
    <TestComponent />
  );
};

export default App;
