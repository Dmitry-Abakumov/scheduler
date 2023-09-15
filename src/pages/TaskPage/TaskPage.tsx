import { useState, useEffect } from "react";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";

import { ITask } from "../../Types";

import { getAllTasks } from "../../shared/services/tasks-api";

const TaskPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();

      setTasks(data);
    })();
  }, []);

  return (
    <>
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default TaskPage;
