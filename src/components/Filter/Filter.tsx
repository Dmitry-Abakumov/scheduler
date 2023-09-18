import React, { useState, ChangeEvent } from "react";

import fields from "./fields";

import { ITask } from "../../Types";

import { getFilteredTasks } from "../../shared/services/tasks-api";

import css from "./Filter.module.css";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Filter = ({ setTasks }: Props) => {
  const [filterOption, setFilterOption] = useState("all");
  const [isMenuShow, setIsMunuShow] = useState(false);

  const isOptionSelected = (option: string) => {
    return option === filterOption;
  };

  const onChange = async ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFilterOption(value);
    setIsMunuShow(false);

    let data: ITask[];

    if (value === "all") {
      data = await getFilteredTasks();
    }

    data = await getFilteredTasks({ done: value === "done" ? true : false });

    setTasks(data);
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
          <label htmlFor="done">completed</label>
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
