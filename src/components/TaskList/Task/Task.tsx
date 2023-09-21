import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import { fetchDeleteTask } from "../../../redux/tasks/tasksOperations";

import { ITask } from "../../../Types";

import { updateDoneById } from "../../../shared/services/tasks-api";

import css from "./Task.module.css";

interface Props extends ITask {
  filterOption: string;
}

const Task = ({ text, _id, done, filterOption }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const onDeleteBtnClick = async () => {
    dispatch(fetchDeleteTask(_id));
  };

  const onChackboxChange = async () => {
    await updateDoneById(_id, { done: !done });
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
