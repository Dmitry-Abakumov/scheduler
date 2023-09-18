import { useState, useEffect } from "react";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/Task/TaskList/TaskList";
import Filter from "../../components/Filter";

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
      <Filter setTasks={setTasks} />
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
};

export default TaskPage;
