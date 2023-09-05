import { ITask } from "../../Types";

type Props = {
  task: string;
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
  id: string;
};

const Task = ({ task, setTasks, id }: Props) => {
  const onDeleteBtnClick = () => {
    setTasks((prev) => {
      const filteredTasks = prev.filter((item) => item.id !== id);
      return filteredTasks;
    });
  };
  return (
    <div>
      <p>{task}</p>
      <button type="button" onClick={onDeleteBtnClick}>
        delete
      </button>
    </div>
  );
};

export default Task;
