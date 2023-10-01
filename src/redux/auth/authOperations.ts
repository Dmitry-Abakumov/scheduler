import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

import { RootState } from "../store";

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
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  }
);

export const fetchLogin = createAsyncThunk(
  "auth/login",
  async (data: ILoginBody, { rejectWithValue }) => {
    try {
      const user: IUser = await API.login(data);
      return user;
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  }
);

export const fetchCurrent = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { token },
    } = getState() as RootState;

    try {
      if (typeof token !== "string") return;

      const user: IUser = await API.getCurrent(token);

      return user;
    } catch (error) {
      const { response } = error as AxiosError;
      return rejectWithValue(response?.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState() as RootState;

      if (!token) return false;
    },
  }
);
