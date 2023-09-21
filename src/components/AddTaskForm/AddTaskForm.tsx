import React, { useState, ChangeEvent, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import { fetchAddTask, fetchAllTasks } from "../../redux/tasks/tasksOperations";

import { ITask } from "../../Types";

import css from "./AddTaskForm.module.css";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const AddTaskForm = ({ setTasks }: Props) => {
  const [field, setField] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (field.trim() === "") return;

    dispatch(fetchAddTask({ text: field, done: false }));

    setField("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setField(e.target.value);
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <input onChange={onChange} type="text" value={field} />
      <button className={css.button} type="submit">
        Добавить задачу
      </button>
    </form>
  );
};

export default AddTaskForm;
