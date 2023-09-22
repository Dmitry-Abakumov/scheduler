import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  fetchAllTasks,
  fetchDeleteTask,
  fetchAddTask,
  fetchUpdateDone,
} from "./tasksOperations";

import { ITask, ITasksState } from "../../Types";

const initialState: ITasksState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePanding = (store: ITasksState) => {
  store.isLoading = true;
};

const handleRejected = (store: ITasksState, payload: any) => {
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
      .addCase(
        fetchAllTasks.fulfilled,
        (store, { payload }: PayloadAction<ITask[] | undefined>) => {
          store.items = payload as ITask[];
          store.isLoading = false;
        }
      )
      .addCase(fetchAllTasks.rejected, handleRejected)

      .addCase(fetchDeleteTask.pending, handlePanding)
      .addCase(
        fetchDeleteTask.fulfilled,
        (store, { payload }: PayloadAction<string | undefined>) => {
          console.log(payload);
          const nextTasks = store.items.filter(({ _id }) => _id !== payload);
          console.log(nextTasks);
          console.log(typeof payload);
          store.items = nextTasks;
          store.isLoading = false;
        }
      )
      .addCase(fetchDeleteTask.rejected, handleRejected)

      .addCase(fetchAddTask.pending, handlePanding)
      .addCase(
        fetchAddTask.fulfilled,
        (store, { payload }: PayloadAction<ITask | undefined>) => {
          console.log(payload);
          store.items.push(payload as ITask);
          store.isLoading = false;
        }
      )
      .addCase(fetchAddTask.rejected, handleRejected)

      .addCase(fetchUpdateDone.pending, handlePanding)
      .addCase(
        fetchUpdateDone.fulfilled,
        (store, { payload }: PayloadAction<string | undefined>) => {
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
        }
      )
      .addCase(fetchUpdateDone.rejected, handleRejected)

      .addCase("setFilteredTasks", (store, { payload }: any) => {
        console.log(payload);
        store.items = payload;
      });
  },
});

export const tasksReducer = tasksSlice.reducer;
