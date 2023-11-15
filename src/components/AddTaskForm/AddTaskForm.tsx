import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

// import { fetchAddTask } from "../../redux/tasks/tasksOperations";

import fields from "./fields";

import { addTask } from "../../shared/services/tasks-api";

import { getAndSetTasksByFilter } from "../../shared/utils";

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
        await getAndSetTasksByFilter(filterOption, dispatch);

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
