import { AppDispatch } from "../../redux/store";

import { getFilteredTasks, getAllTasks } from "../services/tasks-api";

// import { ITask } from "../../Types";

export const getTasksByFilter = async (
  filterOption: string
  // dispatch: AppDispatch
) => {
  try {
    if (filterOption === "all") {
      return await getAllTasks();

      // dispatch({ type: "setFilteredTasks", payload: data });

      // return;
    }

    return await getFilteredTasks(filterOption);

    // dispatch({ type: "setFilteredTasks", payload: data });
  } catch {}
};
