import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/tasks-api";

export const fetchAllTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const tasks = await API.getAllTasks();

      return tasks;
    } catch ({ response: { data } }: any) {
      rejectWithValue(data);
    }
  }
);
