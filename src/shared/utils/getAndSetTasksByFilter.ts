import { AppDispatch } from "../../redux/store";

import { getFilteredTasks } from "../services/tasks-api";

import { ITask } from "../../Types";

export const getAndSetTasksByFilter = async (
  filterOption: string,
  dispatch: AppDispatch
) => {
  if (filterOption === "all") {
    try {
      const data: ITask[] = await getFilteredTasks();

      dispatch({ type: "setFilteredTasks", payload: data });
    } catch {}

    return;
  }

  try {
    const data: ITask[] = await getFilteredTasks({
      done: filterOption === "done" ? true : false,
    });

    dispatch({ type: "setFilteredTasks", payload: data });
  } catch {}
};
