import { createSlice, AnyAction } from "@reduxjs/toolkit";

import {
  fetchAllTasks,
  fetchDeleteTask,
  fetchAddTask,
  fetchUpdateDone,
} from "./tasksOperations";

import { ITask } from "../../Types";

export interface ITasksStore {
  items: ITask[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ITasksStore = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePanding = (store: ITasksStore) => {
  store.isLoading = true;
};

const handleRejected = (store: ITasksStore, { payload }: AnyAction) => {
  store.isLoading = false;
  store.error = payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTasks.pending, handlePanding)
      .addCase(fetchAllTasks.fulfilled, (store, { payload }) => {
        store.items = payload as ITask[];
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchAllTasks.rejected, handleRejected)

      .addCase(fetchDeleteTask.pending, handlePanding)
      .addCase(fetchDeleteTask.fulfilled, (store: ITasksStore, { payload }) => {
        const nextTasks = store.items.filter(({ _id }) => _id !== payload);
        store.items = nextTasks;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchDeleteTask.rejected, handleRejected)

      // .addCase(fetchAddTask.pending, handlePanding)
      // .addCase(fetchAddTask.fulfilled, (store: ITasksStore, { payload }) => {
      //   store.items.push(payload as ITask);
      //   store.isLoading = false;
      //   store.error = null;
      // })
      // .addCase(fetchAddTask.rejected, handleRejected)

      .addCase(fetchUpdateDone.pending, handlePanding)
      .addCase(fetchUpdateDone.fulfilled, (store: ITasksStore, { payload }) => {
        const nextTasks: ITask[] = store.items.map((i) => {
          if (i._id === payload) {
            return {
              ...i,
              done: !i.done,
            };
          }

          return i;
        });
        store.items = nextTasks;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchUpdateDone.rejected, handleRejected)

      .addCase("setFilteredTasks", (store, { payload }: AnyAction) => {
        store.items = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
