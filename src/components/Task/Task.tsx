import React from "react";

import { ITask } from "../../Types";

import {
  updateDoneById,
  deleteTaskById,
  getAllTasks,
} from "../../shared/services/tasks-api";

interface Props extends ITask {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const Task = ({ text, setTasks, _id, done }: Props) => {
  const onDeleteBtnClick = async () => {
    await deleteTaskById(_id);

    setTasks(await getAllTasks());
  };

  const onChackboxChange = async () => {
    await updateDoneById(_id, { done: !done });

    setTasks(await getAllTasks());
  };

  return (
    <div>
      <p>{text}</p>
      <input type="checkbox" checked={done} onChange={onChackboxChange} />
      <button type="button" onClick={onDeleteBtnClick}>
        delete
      </button>
    </div>
  );
};

export default Task;
