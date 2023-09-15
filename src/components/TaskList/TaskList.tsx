import React from "react";

import Task from "../Task/Task";

import { ITask } from "../../Types";

type Props = {
  tasks: ITask[];
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
};

const TaskList = ({ tasks, setTasks }: Props) => {
  return (
    <>
      {tasks.map(({ text, _id, done }) => (
        <Task key={_id} text={text} setTasks={setTasks} _id={_id} done={done} />
      ))}
    </>
  );
};

export default TaskList;
