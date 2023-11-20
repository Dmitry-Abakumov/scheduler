import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

// import { fetchAddTask } from "../../redux/tasks/tasksOperations";

import fields from "./fields";

import { addTask, getFilteredTasks } from "../../shared/services/tasks-api";

import { getTasksByFilter } from "../../shared/utils";

import css from "./AddTaskForm.module.css";

const initialFields = {
  text: "",
};

type Props = {
  filterOption: string;
};

const AddTaskForm = ({ filterOption }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={async (values, { resetForm }) => {
        // await dispatch(fetchAddTask(values));
        await addTask(values);
        const filteredTasks = await getTasksByFilter(filterOption);

        dispatch({ type: "setFilteredTasks", payload: filteredTasks });

        resetForm();
      }}
    >
      <Form className={css.form}>
        <TextField {...fields.text}></TextField>
        <Button type="submit" className={css.btn}>
          Добавить задачу
        </Button>
      </Form>
    </Formik>
  );
};

export default AddTaskForm;
