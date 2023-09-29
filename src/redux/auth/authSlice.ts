import { AnyAction, createSlice } from "@reduxjs/toolkit";

import { IUser, fetchLogin } from "./authOperations";

import { fetchRegister } from "./authOperations";

interface IAuthStore {
  user: {
    login: string;
    email: string;
  };
  token: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: null | string;
}

const initialState = {
  user: {
    login: "",
    email: "",
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const handlePanding = (store: IAuthStore) => {
  store.isLoading = true;
  store.error = null;
};

const handleRejected = (store: IAuthStore, { payload }: AnyAction) => {
  store.isLoading = false;
  store.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, handlePanding)
      .addCase(fetchRegister.fulfilled, (store: IAuthStore, { payload }) => {
        store.user = payload as IUser;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchRegister.rejected, handleRejected)

      .addCase(fetchLogin.pending, handlePanding)
      .addCase(fetchLogin.fulfilled, (store: IAuthStore, { payload }) => {
        store.user = {
          login: payload?.login as string,
          email: payload?.email as string,
        };
        store.token = payload?.token as string;
        store.isLoggedIn = true;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchLogin.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
