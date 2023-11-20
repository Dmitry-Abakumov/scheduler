import { ChangeEvent, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { MouseEvent } from "react";
import { AppDispatch } from "../../../redux/store";

import { IoMdArrowDropdown } from "react-icons/io";
import { FaCircleDot } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

import { getTasksByFilter } from "../../../shared/utils";

import fields from "./fields";

import css from "./Filter.module.css";

interface Props {
  filterOption: string;
  setFilterOption: React.Dispatch<
    React.SetStateAction<"all" | "done" | "inProgress">
  >;
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

  const handleChange = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilterOption(value as "all" | "done" | "inProgress");

    const filteredTasks = await getTasksByFilter(value);

    dispatch({ type: "setFilteredTasks", payload: filteredTasks });

    setIsOptionsShow((prev) => !prev);
  };

  const isOptionChecked = (option: "all" | "done" | "inProgress") => {
    return filterOption === option;
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
        {isOptionsShow ? (
          <MdKeyboardArrowUp size="22" className={css.icon} />
        ) : (
          <MdKeyboardArrowDown size="22" className={css.icon} />
        )}
      </div>
      <form className={isOptionsShow ? css.form : `${css.form} ${css.hide}`}>
        <label
          htmlFor="all"
          className={
            isOptionChecked("all")
              ? `${css.label} ${css.checkedLabel}`
              : css.label
          }
        >
          <p>all</p>
          {isOptionChecked("all") && (
            <ImCheckmark size="12" className={css.icon} />
          )}
        </label>
        <label
          htmlFor="done"
          className={
            isOptionChecked("done")
              ? `${css.label} ${css.checkedLabel}`
              : css.label
          }
        >
          <p>done</p>
          {isOptionChecked("done") && (
            <ImCheckmark size="12" className={css.icon} />
          )}
        </label>

        <label
          htmlFor="inProgress"
          className={
            isOptionChecked("inProgress")
              ? `${css.label} ${css.checkedLabel}`
              : css.label
          }
        >
          <p>in progress</p>
          {isOptionChecked("inProgress") && (
            <ImCheckmark size="12" className={css.icon} />
          )}
        </label>

        <input
          {...fields.all}
          onChange={handleChange}
          checked={isOptionChecked("all")}
          className={css.hide}
        />
        <input
          {...fields.done}
          onChange={handleChange}
          checked={isOptionChecked("done")}
          className={css.hide}
        />
        <input
          {...fields.inProgress}
          onChange={handleChange}
          checked={isOptionChecked("inProgress")}
          className={css.hide}
        />
      </form>
    </div>
  );
};

export default Filter;
