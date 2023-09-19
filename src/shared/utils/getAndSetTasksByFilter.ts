import { getFilteredTasks } from "../services/tasks-api";

import { ITask } from "../../Types";

const getAndSetTasksByFilter = async (
  filterOption: string,
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
) => {
  if (filterOption === "all") {
    console.log("all tasks request");
    const data = await getFilteredTasks();
    setTasks(data);

    return;
  }

  const data = await getFilteredTasks({
    done: filterOption === "done" ? true : false,
  });

  setTasks(data);
};

export default getAndSetTasksByFilter;
