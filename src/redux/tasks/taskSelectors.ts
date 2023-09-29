import { ITasksStore } from "./tasksSlice";

export const getTasks = ({ tasks }: { tasks: ITasksStore }) => tasks.items;
