import { useState, ChangeEvent } from "react";

const AddTaskForm = () => {
  const [task, setTask] = useState("");

  const onSubmit = () => {};

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text" value={task} />
      <button type="submit">Добавить задачу</button>
    </form>
  );
};

export default AddTaskForm;
