import { useSelector } from "react-redux/es/hooks/useSelector";

import Task from "./Task/Task";

import { getTasks } from "../../redux/tasks/taskSelectors";

import css from "./TaskList.module.css";

type Props = {
  filterOption: string;
};

const TaskList = ({ filterOption }: Props) => {
  const tasks = useSelector(getTasks);

  return (
    <section className={css.section}>
      <ul
        className={
          tasks?.length > 0
            ? `${css.taskList} ${css.paddings}`
            : `${css.taskList}`
        }
      >
        {tasks.map(({ text, _id, done }) => (
          <Task
            key={_id}
            text={text}
            _id={_id}
            done={done}
            filterOption={filterOption}
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
