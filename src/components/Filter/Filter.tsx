import React, { ChangeEvent, useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import Options from "./Options";

import fields from "./fields";

import { getAndSetTasksByFilter } from "../../shared/utils";

import css from "./Filter.module.css";

interface Props {
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
}

const bodyRef = document.querySelector("body");

const Filter = ({ filterOption, setFilterOption }: Props) => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  console.log(isOptionsShow);

  const toggleOptions = useCallback(() => {
    setIsOptionsShow((prev) => !prev);
  }, []);

  // useEffect(() => {
  //   bodyRef?.addEventListener("click", toggleOptions);
  // }, [toggleOptions]);

  const isOptionSelected = (option: string) => {
    return option === filterOption;
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setFilterOption(value);
    getAndSetTasksByFilter(value, dispatch);
  };

  // if (!isOptionsShow) bodyRef?.removeEventListener("click", toggleOptions);

  return (
    <>
      <div className={css.filter} onClick={toggleOptions}>
        <div className={css.currentOption}>{filterOption}</div>
        {isOptionsShow && (
          <Options
            isOptionsShow={isOptionsShow}
            toggleOptions={toggleOptions}
          />
        )}
      </div>

      <input
        {...fields.all}
        className={css.hide}
        onChange={onChange}
        checked={isOptionSelected("all")}
      />
      <input
        {...fields.done}
        className={css.hide}
        onChange={onChange}
        checked={isOptionSelected("done")}
      />
      <input
        {...fields.inProgress}
        className={css.hide}
        onChange={onChange}
        checked={isOptionSelected("in progress")}
      />
    </>
  );
};

export default Filter;
