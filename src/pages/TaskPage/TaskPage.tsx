import { useState } from "react";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";

import { ITask } from "../../Types";

const TaskPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <>
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default TaskPage;
