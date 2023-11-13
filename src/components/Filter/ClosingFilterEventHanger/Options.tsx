import { useEffect, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { Formik, Form, Field } from "formik";
import { MouseEvent } from "react";

import { getAndSetTasksByFilter } from "../../../shared/utils";

import fields from "../fields";

import css from "./Options.module.css";

type Props = {
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
  setIsOptionsShow: React.Dispatch<React.SetStateAction<boolean>>;
  isOptionsShow: boolean;
  // allOptionId: string;
  // doneOptionId: string;
  // inProgressOptionId: string;
};

const Options = ({
  setFilterOption,
  setIsOptionsShow,
}: // allOptionId,
// doneOptionId,
// inProgressOptionId,
Props) => {
  const dispatch = useDispatch<AppDispatch>();

  // useEffect(() => {
  //   addBodyListeners();
  //   return removeBodyListeners;
  // }, [addBodyListeners, removeBodyListeners]);

  // const changeFilterOption = (value: string) => {
  //   setFilterOption(value);
  //   getAndSetTasksByFilter(value, dispatch);
  // };

  return (
    <>
      {/* <label
        htmlFor="1"
        onClick={(e: MouseEvent<HTMLLabelElement>) => {
          setIsOptionsShow((prev) => !prev);

          e.stopPropagation();
        }}
      >
        1
      </label>
      <label
        htmlFor="2"
        onClick={(e: MouseEvent<HTMLLabelElement>) => {
          setIsOptionsShow((prev) => !prev);

          e.stopPropagation();
        }}
      >
        2
      </label> */}
    </>
  );
};

export default Options;
