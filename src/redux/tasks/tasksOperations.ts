import { createAsyncThunk } from "@reduxjs/toolkit";

import { AxiosError } from "axios";

import * as API from "../../shared/services/tasks-api";
import { ITask } from "../../Types";

interface IUpdateDoneParams {
  _id: string;
  data: { done: boolean };
}

export const fetchAllTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const tasks: ITask[] = await API.getAllTasks();

      return tasks;
    } catch ({ response: { data } }: any) {
      return rejectWithValue(data);
    }
  }
);

export const fetchDeleteTask = createAsyncThunk(
  "tasks/fetchDelete",
  async (id: string, { rejectWithValue }) => {
    try {
      const { _id }: ITask = await API.deleteTaskById(id);
      return _id;
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  }
);

export const fetchAddTask = createAsyncThunk(
  "tasks/fetchAdd",
  async (data: { text: string }, { rejectWithValue }) => {
    try {
      const { text, done, _id }: ITask = await API.addTask({ ...data });

      return { text, done, _id };
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  }
);

export const fetchUpdateDone = createAsyncThunk(
  "tasks/fetchUpdateDone",
  async ({ _id: id, data }: IUpdateDoneParams, { rejectWithValue }) => {
    try {
      const { _id }: ITask = await API.updateDoneById(id, data);

      return _id;
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  }
);
