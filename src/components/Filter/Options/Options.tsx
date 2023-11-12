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

const bodyRef = document.querySelector("body");

const Options = ({
  setFilterOption,
  setIsOptionsShow,
}: // allOptionId,
// doneOptionId,
// inProgressOptionId,
Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const toggleOptions = useCallback(
    (e: any) => {
      setIsOptionsShow((prev) => !prev);
    },
    [setIsOptionsShow]
  );

  const onEscapePress = useCallback(
    (e: any) => {
      if (e.code !== "Escape") return;

      toggleOptions(e);
    },
    [toggleOptions]
  );

  const addBodyListeners = useCallback(() => {
    bodyRef?.addEventListener("click", toggleOptions);
    document.addEventListener("keydown", onEscapePress);
  }, [onEscapePress, toggleOptions]);

  const removeBodyListeners = useCallback(() => {
    bodyRef?.removeEventListener("click", toggleOptions);
    document.removeEventListener("keydown", onEscapePress);
  }, [onEscapePress, toggleOptions]);

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
      {/* <label htmlFor="all" className={css.label}>
        all
      </label>
      <label htmlFor="done" className={css.label}>
        done
      </label>
      <label htmlFor="inProgress" className={css.label}>
        in progress
      </label> */}
      <label
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
      </label>
    </>
  );
};

export default Options;
