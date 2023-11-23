import axios from "axios";

export const instance = axios.create({
  baseURL: "https://scheduler-server-klu9.onrender.com/api",
});

export const getAllTasks = async () => {
  const { data } = await instance.get("/tasks");

  return data;
};

export const getFilteredTasks = async (filterOption: string) => {
  const { data } = await instance.get(
    `/tasks${filterOption === "done" ? `?done=true` : "?done=false"}`
  );

  return data;
};

export const addTask = async (body: { text: string }) => {
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
