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
      {tasks.map(({ task, id }) => (
        <Task task={task} setTasks={setTasks} id={id} />
      ))}
    </>
  );
};

export default TaskList;
