import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../redux/store";

import AddTaskForm from "../../components/AddTaskForm";
import TaskList from "../../components/TaskList/TaskList";
import FilterBar from "../../components/FilterBar";
import Container from "../../shared/components/Container";

import { fetchAllTasks } from "../../redux/tasks/tasksOperations";

import { getTasks } from "../../redux/tasks/taskSelectors";

import { ITask } from "../../Types";

import css from "./TaskPage.module.css";

const TaskPage = () => {
  const [filterOption, setFilterOption] = useState<
    "all" | "done" | "inProgress"
  >("all");

  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector(getTasks);

  useEffect(() => {
    (async () => {
      dispatch(fetchAllTasks());
    })();
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <hr className={css.line} />
      <section className={css.filterBarWrap}>
        <Container>
          <FilterBar
            filterOption={filterOption}
            setFilterOption={setFilterOption}
          />
        </Container>
      </section>
      <hr className={css.line} />
      <section className={css.addTaskFormSection}>
        <Container className={css.container}>
          <AddTaskForm filterOption={filterOption} />
        </Container>
      </section>
      {tasks.length > 0 && (
        <section className={css.taskSection}>
          <Container>
            <TaskList filterOption={filterOption} />
          </Container>
        </section>
      )}
    </div>
  );
};

export default TaskPage;
