import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    login: "",
    email: "",
    password: "",
  },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const authReducer = authSlice.reducer;
