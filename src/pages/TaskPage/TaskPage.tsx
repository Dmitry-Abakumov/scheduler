import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import Filter from "../../components/Filter";

import { fetchAllTasks } from "../../redux/tasks/tasksOperations";

const TaskPage = () => {
  const [filterOption, setFilterOption] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      dispatch(fetchAllTasks());
    })();
  }, [dispatch]);

  return (
    <>
      <Filter filterOption={filterOption} setFilterOption={setFilterOption} />
      <AddTaskForm />
      <TaskList filterOption={filterOption} />
    </>
  );
};

export default TaskPage;
