import { AppDispatch } from "../../redux/store";

import { getFilteredTasks, getAllTasks } from "../services/tasks-api";

import { ITask } from "../../Types";

export const getAndSetTasksByFilter = async (
  filterOption: string,
  dispatch: AppDispatch
) => {
  try {
    if (filterOption === "all") {
      const data: ITask[] = await getAllTasks();

      dispatch({ type: "setFilteredTasks", payload: data });

      return;
    }

    const data: ITask[] = await getFilteredTasks(filterOption);

    dispatch({ type: "setFilteredTasks", payload: data });
  } catch {}
};
