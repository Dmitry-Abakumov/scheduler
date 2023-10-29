import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import Filter from "../../components/Filter";
import Container from "../../shared/components/Container";

import { fetchAllTasks } from "../../redux/tasks/tasksOperations";

import css from "./TaskPage.module.css";

const TaskPage = () => {
  const [filterOption, setFilterOption] = useState("all");

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      dispatch(fetchAllTasks());
    })();
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <section className={css.taskControlsWrap}>
        <Container className={css.container}>
          <Filter
            filterOption={filterOption}
            setFilterOption={setFilterOption}
          />
          <AddTaskForm />
        </Container>
      </section>

      <TaskList filterOption={filterOption} />
    </div>
  );
};

export default TaskPage;
