import { AnyAction, createSlice } from "@reduxjs/toolkit";

import { IUser, fetchCurrent, fetchLogin, fetchLogout } from "./authOperations";

import { fetchRegister } from "./authOperations";

interface IAuthStore {
  user: {
    login: string;
    email: string;
  };
  token: null | string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: any;
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

const handlePending = (store: IAuthStore) => {
  store.isLoading = true;
  store.error = null;
};

const handleRejected = (store: IAuthStore, { payload }: AnyAction) => {
  console.log("handleRejected");
  store.isLoading = false;
  store.error = payload;
  store.token = null;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, handlePending)
      .addCase(fetchRegister.fulfilled, (store: IAuthStore, { payload }) => {
        store.user = payload as IUser;
        store.isLoading = false;
        store.error = null;
      })
      .addCase(fetchRegister.rejected, handleRejected)

      .addCase(fetchLogin.pending, handlePending)
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
      .addCase(fetchLogin.rejected, handleRejected)

      .addCase(fetchCurrent.pending, handlePending)
      .addCase(fetchCurrent.fulfilled, (store: IAuthStore, { payload }) => {
        store.user = payload as IUser;
        store.isLoading = false;
        store.isLoggedIn = true;
        store.error = null;
      })
      .addCase(fetchCurrent.rejected, handleRejected)

      .addCase(fetchLogout.pending, handlePending)
      .addCase(fetchLogout.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchLogout.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
