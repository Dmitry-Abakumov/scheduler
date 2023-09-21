import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002/api",
});

export const getAllTasks = async () => {
  const { data } = await instance.get("/tasks");

  return data;
};

export const getFilteredTasks = async (filterOption?: { done: boolean }) => {
  const { data } = await instance.get(
    `/tasks${
      filterOption
        ? `?${Object.keys(filterOption)[0]}=${filterOption.done}`
        : ""
    }`
  );

  return data;
};

export const addTask = async (body: { text: string; done: boolean }) => {
  const { data } = await instance.post("/tasks", body);

  return data;
};

export const updateDoneById = async (
  _id: string,
  { done }: { done: boolean }
) => {
  const { data } = await instance.patch(`/tasks/${_id}/done`, { done });

  return data;
};

export const deleteTaskById = async (_id: string) => {
  const { data } = await instance.delete(`/tasks/${_id}`);

  return data;
};

export const getCompletedTasks = () => {};
