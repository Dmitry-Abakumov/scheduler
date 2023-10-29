import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

import TextField from "../../shared/components/TextField";
import Button from "../../shared/components/Button";

import { fetchAddTask } from "../../redux/tasks/tasksOperations";

import fields from "./fields";

import css from "./AddTaskForm.module.css";

const initialFields = {
  text: "",
};

const AddTaskForm = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialFields}
      onSubmit={(values, { resetForm }) => {
        dispatch(fetchAddTask(values));
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
