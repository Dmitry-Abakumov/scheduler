import React from "react";

import { ITask } from "../../../Types";

import {
  updateDoneById,
  deleteTaskById,
} from "../../../shared/services/tasks-api";

import css from "./Task.module.css";

import getAndSetTasksByFilter from "../../../shared/utils/getAndSetTasksByFilter";

interface Props extends ITask {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  filterOption: string;
}

const Task = ({ text, setTasks, _id, done, filterOption }: Props) => {
  const onDeleteBtnClick = async () => {
    await deleteTaskById(_id);

    getAndSetTasksByFilter(filterOption, setTasks);
  };

  const onChackboxChange = async () => {
    await updateDoneById(_id, { done: !done });

    getAndSetTasksByFilter(filterOption, setTasks);
  };

  return (
    <div className={css.taskWrap}>
      <p>{text}</p>
      <input type="checkbox" checked={done} onChange={onChackboxChange} />
      <button type="button" onClick={onDeleteBtnClick}>
        delete
      </button>
    </div>
  );
};

export default Task;
