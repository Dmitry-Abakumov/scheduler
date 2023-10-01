import { instance } from "./tasks-api";

export interface IRegisterBody {
  login: string;
  email: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

const setToken = (token: string) => {
  if (!token) return (instance.defaults.headers.authorization = "");

  return (instance.defaults.headers.authorization = `Bearer ${token}`);
};

export const register = async (body: IRegisterBody) => {
  const { data } = await instance.post("auth/register", body);

  return data;
};

export const login = async (body: ILoginBody) => {
  const { data } = await instance.post("auth/login", body);
  setToken(data.token);

  return data;
};

export const getCurrent = async (token: string) => {
  setToken(token);
  const { data } = await instance.get("auth/current");

  return data;
};
