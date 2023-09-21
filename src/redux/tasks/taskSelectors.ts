import { ITasksState } from "../../Types";

export const getTasks = ({ tasks }: { tasks: ITasksState }) => tasks.items;
