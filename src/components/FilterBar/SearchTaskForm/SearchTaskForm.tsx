import { useDispatch, useSelector } from "react-redux";
import { Form, Formik } from "formik";
import TextField from "../../../shared/components/TextField";

import { AppDispatch } from "../../../redux/store";

import { getTasksByFilter } from "../../../shared/utils";

import { getTasks } from "../../../redux/tasks/taskSelectors";

import { ITask } from "../../../Types";
import { ChangeEvent } from "react";
import { useAsyncValue } from "react-router-dom";

type Props = {
  filterOption: "all" | "done" | "inProgress";
};

const SearchTaskForm = ({ filterOption }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const getTasksBySerch = (tasks: ITask[], input: string) => {
    const lowerCaseInput = input.toLowerCase().trim();
    return tasks.filter(({ text }) =>
      text.toLowerCase().trim().includes(lowerCaseInput)
    );
  };

  return (
    <Formik
      initialValues={{
        input: "",
      }}
      onSubmit={() => {}}
    >
      {({ setFieldValue }) => (
        <Form>
          <TextField
            name="taskSearch"
            type="text"
            placeholder="Search"
            onChange={async ({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              setFieldValue("filter", value);

              const filteredTasks = await getTasksByFilter(filterOption);

              dispatch({
                type: "setFilteredTasks",
                payload: getTasksBySerch(filteredTasks, value),
              });
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchTaskForm;
