import { createSlice } from "@reduxjs/toolkit";

import { fetchAllTasks } from "./tasksOperations";

import { PayloadAction } from "@reduxjs/toolkit";

import { ITask } from "../../Types";

interface IState {
  tasks: ITask[];
  isLoading: boolean;
  error: null | Error;
}

const initialState: IState = {
  tasks: [],
  isLoading: false,
  error: null,
};

const handlePanding = (store: IState) => {
  store.isLoading = true;
};

const handleRejected = (
  store: IState,
  {
    payload,
  }: PayloadAction<
    any,
    string,
    {
      arg: void;
      requestId: string;
      requestStatus: "rejected";
    },
    never
  >
) => {
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
        store.tasks = payload;
      })
      .addCase(fetchAllTasks.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
