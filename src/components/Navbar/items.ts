import { nanoid } from "nanoid";

const items = [
  {
    id: nanoid(),
    text: "Home",
    link: "/",
    private: false,
  },
  {
    id: nanoid(),
    text: "Tasks",
    link: "/tasks",
    private: true,
  },
];

export default items;
