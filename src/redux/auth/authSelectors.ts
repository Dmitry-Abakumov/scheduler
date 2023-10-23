import { RootState } from "../store";

export const getUser = ({ auth: { user } }: RootState) => user;
export const getIsloading = ({ auth: { isLoading } }: RootState) => isLoading;
export const getToken = ({ auth: { token } }: RootState) => token;
export const getIsLoggedIn = ({ auth: { isLoggedIn } }: RootState) =>
  isLoggedIn;
export const getLogin = ({ auth: { user } }: RootState) => user.login;
