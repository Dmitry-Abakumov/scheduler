import { useSelector } from "react-redux/es/hooks/useSelector";

import Task from "./Task/Task";

import { getTasks } from "../../redux/tasks/taskSelectors";

type Props = {
  filterOption: string;
};

const TaskList = ({ filterOption }: Props) => {
  const tasks = useSelector(getTasks);
  return (
    <>
      {tasks.map(({ text, _id, done }) => (
        <Task
          key={_id}
          text={text}
          _id={_id}
          done={done}
          filterOption={filterOption}
        />
      ))}
    </>
  );
};

export default TaskList;
