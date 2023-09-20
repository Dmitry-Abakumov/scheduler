import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import Filter from "../../components/Filter";

import { ITask } from "../../Types";

// import { fetchAllTasks } from "../../redux/tasks/tasksOperations";

import { getAllTasks } from "../../shared/services/tasks-api";

const TaskPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filterOption, setFilterOption] = useState("all");

  // const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const data = await getAllTasks();
      // dispatch(fetchAllTasks());

      setTasks(data);
    })();
  }, []);

  return (
    <>
      <Filter
        setTasks={setTasks}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <AddTaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} filterOption={filterOption} />
    </>
  );
};

export default TaskPage;
