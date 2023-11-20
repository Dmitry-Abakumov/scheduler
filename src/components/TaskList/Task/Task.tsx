import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

import Checkbox from "../../../shared/components/Checkbox";
import Button from "../../../shared/components/Button";

import { fetchDeleteTask } from "../../../redux/tasks/tasksOperations";

import { getTasksByFilter } from "../../../shared/utils";

import { ITask } from "../../../Types";

import { fetchUpdateDone } from "../../../redux/tasks/tasksOperations";

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
    await dispatch(fetchUpdateDone({ _id, data: { done: !done } }));

    const filteredTasks = await getTasksByFilter(filterOption);

    dispatch({ type: "setFilteredTasks", payload: filteredTasks });
  };

  return (
    <li className={css.taskWrap}>
      <p className={done ? `${css.text} ${css.checkedText}` : `${css.text}`}>
        {text}
      </p>

      <div className={css.inputBtnWrap}>
        <Checkbox checked={done} onCheckboxChange={onChackboxChange} />
        <Button type="button" onClick={onDeleteBtnClick} className={css.btn}>
          delete
        </Button>
      </div>
    </li>
  );
};

export default Task;
