import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
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

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilterOption(value);

    getAndSetTasksByFilter(value, dispatch);

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
      <div
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          toggleOption();

          e.stopPropagation();
        }}
        className={css.currentOption}
      >
        {filterOption}
      </div>
      <form className={isOptionsShow ? css.form : `${css.form} ${css.hide}`}>
        <label htmlFor="all" className={css.label}>
          all
        </label>
        <label htmlFor="done" className={css.label}>
          done
        </label>
        <label htmlFor="inProgress" className={css.label}>
          in progress
        </label>

        <input
          {...fields.all}
          onChange={handleChange}
          checked={filterOption === "all"}
          className={css.hide}
        />
        <input
          {...fields.done}
          onChange={handleChange}
          checked={filterOption === "done"}
          className={css.hide}
        />
        <input
          {...fields.inProgress}
          onChange={handleChange}
          checked={filterOption === "inProgress"}
          className={css.hide}
        />
      </form>
    </div>
  );
};

export default Filter;
