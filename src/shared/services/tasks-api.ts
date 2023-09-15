import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const getAllTasks = async () => {
  const { data } = await instance.get("/tasks");

  return data;
};

export const addTask = async (body: { text: string; done: boolean }) => {
  await instance.post("/tasks", body);
};

export const updateDoneById = async (
  _id: string,
  { done }: { done: boolean }
) => {
  const data = await instance.patch(`/tasks/${_id}/done`, { done });

  return data;
};

export const deleteTaskById = async (_id: string) => {
  const data = await instance.delete(`/tasks/${_id}`);

  return data;
};
