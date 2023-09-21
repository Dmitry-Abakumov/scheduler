export interface ITask {
  text: string;
  _id: string;
  done: boolean;
}

export interface ITasksState {
  items: ITask[];
  isLoading: boolean;
  error: null | Error;
}
