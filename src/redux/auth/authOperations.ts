import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/auth-api";

import { IRegisterBody, ILoginBody } from "../../shared/services/auth-api";

export interface IUser {
  login: string;
  email: string;
  token?: string;
}

export const fetchRegister = createAsyncThunk(
  "auth/register",
  async (data: IRegisterBody, { rejectWithValue }) => {
    try {
      const user: IUser = await API.register(data);
      return user;
    } catch ({ response: { data } }: any) {
      rejectWithValue(data);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "aith/login",
  async (data: ILoginBody, { rejectWithValue }) => {
    try {
      const user: IUser = await API.login(data);
      return user;
    } catch ({ response: { data } }: any) {
      rejectWithValue(data);
    }
  }
);
