import React, { useState, ChangeEvent, FormEvent } from "react";
import { nanoid } from "nanoid";

import { ITask } from "../../Types";

type Props = {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const AddTaskForm = ({ setTasks }: Props) => {
  const [field, setField] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTasks((prev) => {
      const task = {
        task: field,
        id: nanoid(),
      };

      return [...prev, task];
    });

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
