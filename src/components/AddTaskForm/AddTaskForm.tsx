import React, { useState, ChangeEvent, FormEvent } from "react";

import { ITask } from "../../Types";

import { addTask, getAllTasks } from "../../shared/services/tasks-api";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const AddTaskForm = ({ setTasks }: Props) => {
  const [field, setField] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (field.trim() === "") return;

    await addTask({ text: field, done: false });

    setTasks(await getAllTasks());
    setField("");
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setField(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" value={field} />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};

export default AddTaskForm;
