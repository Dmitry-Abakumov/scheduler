import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useState } from "react";
import { MouseEvent } from "react";

import Options from "./Options";

import fields from "./fields";

import css from "./Filter.module.css";

interface Props {
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ filterOption, setFilterOption }: Props) => {
  const [isOptionsShow, setIsOptionsShow] = useState(false);

  // const allOptionId = nanoid();
  // const doneOptionId = nanoid();
  // const inProgressOptionId = nanoid();

  return (
    // <Formik initialValues={{ option: "in progress" }} onSubmit={() => {}}>
    <>
      {/* <div className={css.filter}> */}
      <div
        className={css.filter}
        onClick={(e: MouseEvent<HTMLDivElement>) => {
          setIsOptionsShow((prev) => !prev);

          e.stopPropagation();
        }}
      >
        {filterOption}
        <form className={isOptionsShow ? css.form : `${css.form} ${css.hide}`}>
          {isOptionsShow && (
            <Options
              filterOption={filterOption}
              setFilterOption={setFilterOption}
              setIsOptionsShow={setIsOptionsShow}
              isOptionsShow={isOptionsShow}
              // allOptionId={allOptionId}
              // doneOptionId={doneOptionId}
              // inProgressOptionId={inProgressOptionId}
            />
          )}

          {/* <input name="option" type="radio" value="all" id="all" />
            <input name="option" type="radio" value="done" id="done" />
            <input {...fields.inProgress} id="inProgress" /> */}
          <input name="test" value="1" type="radio" id="1" />
          <input name="test" value="2" type="radio" id="2" />
        </form>
      </div>

      {/* </div> */}
    </>
    // </Formik>
  );
};

export default Filter;
