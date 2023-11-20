import Filter from "./Filter/Filter";
import SearchTaskForm from "./SearchTaskForm";

import { ITask } from "../../Types";

type Props = {
  filterOption: "all" | "done" | "inProgress";
  setFilterOption: React.Dispatch<
    React.SetStateAction<"all" | "done" | "inProgress">
  >;
};

const FilterBar = ({ filterOption, setFilterOption }: Props) => {
  return (
    <>
      <Filter filterOption={filterOption} setFilterOption={setFilterOption} />
      <SearchTaskForm filterOption={filterOption} />
    </>
  );
};

export default FilterBar;
