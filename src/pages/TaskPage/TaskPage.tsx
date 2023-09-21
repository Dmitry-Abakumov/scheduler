import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import Filter from "../../components/Filter";

import { ITask } from "../../Types";

import { fetchAllTasks } from "../../redux/tasks/tasksOperations";

const TaskPage = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [filterOption, setFilterOption] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      dispatch(fetchAllTasks());
    })();
  }, [dispatch]);

  return (
    <>
      <Filter
        setTasks={setTasks}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
      />
      <AddTaskForm setTasks={setTasks} />
      <TaskList filterOption={filterOption} />
    </>
  );
};

export default TaskPage;
