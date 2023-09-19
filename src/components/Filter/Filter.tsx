import React, { useState, ChangeEvent } from "react";

import fields from "./fields";

import getAndSetTasksByFilter from "../../shared/utils/getAndSetTasksByFilter";

import { ITask } from "../../Types";

import css from "./Filter.module.css";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ setTasks, filterOption, setFilterOption }: Props) => {
  const [isMenuShow, setIsMunuShow] = useState(false);

  const isOptionSelected = (option: string) => {
    return option === filterOption;
  };

  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setFilterOption(value);
    setIsMunuShow(false);

    getAndSetTasksByFilter(value, setTasks);
  };

  return (
    <div className={css.filter}>
      <div
        className={css.currentOption}
        onClick={() => setIsMunuShow((prev) => !prev)}
      >
        {filterOption}
        <div className={isMenuShow ? `${css.labelWrapper}` : `${css.hide}`}>
          <label htmlFor="all">all</label>
          <label htmlFor="done">done</label>
          <label htmlFor="in progress">in progress</label>
        </div>
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
    </div>
  );
};

export default Filter;
