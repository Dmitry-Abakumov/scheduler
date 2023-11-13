import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { MouseEvent } from "react";
import { AppDispatch } from "../../redux/store";

import { getAndSetTasksByFilter } from "../../shared/utils";

import fields from "./fields";

import css from "./Filter.module.css";

interface Props {
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
}

const bodyRef = document.querySelector("body");

const Filter = ({ filterOption, setFilterOption }: Props) => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const onEscapePress = useCallback((e: any) => {
    if (e.code !== "Escape") return;

    setIsOptionsShow((prev) => !prev);
  }, []);

  const toggleOption = useCallback(() => {
    setIsOptionsShow((prev) => !prev);
  }, []);

  const addBodyListeners = useCallback(() => {
    bodyRef?.addEventListener("click", toggleOption);
    document.addEventListener("keydown", onEscapePress);
  }, [onEscapePress, toggleOption]);

  const removeBodyListeners = useCallback(() => {
    bodyRef?.removeEventListener("click", toggleOption);
    document.removeEventListener("keydown", onEscapePress);
  }, [toggleOption, onEscapePress]);

  const handleChange = (option: string) => {
    console.log(option);
    getAndSetTasksByFilter(option, dispatch);

    setIsOptionsShow((prev) => !prev);
  };

  isOptionsShow ? addBodyListeners() : removeBodyListeners();

  return (
    <div
      className={css.filter}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
      }}
    >
      <Formik initialValues={{ option: "all" }} onSubmit={() => {}}>
        {({ values: { option } }) => {
          return (
            <>
              <div
                onClick={(e: MouseEvent<HTMLDivElement>) => {
                  toggleOption();

                  e.stopPropagation();
                }}
                className={css.currentOption}
              >
                {option}
              </div>
              <Form
                className={isOptionsShow ? css.form : `${css.form} ${css.hide}`}
              >
                <label htmlFor="all" className={css.label}>
                  all
                </label>
                <label htmlFor="done" className={css.label}>
                  done
                </label>
                <label htmlFor="inProgress" className={css.label}>
                  in progress
                </label>

                <Field {...fields.all} onChange={() => handleChange(option)} />
                <Field {...fields.done} onChange={() => handleChange(option)} />
                <Field
                  {...fields.inProgress}
                  onChange={() => handleChange(option)}
                />
              </Form>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Filter;
