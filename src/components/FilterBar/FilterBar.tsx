import Filter from "./Filter/Filter";
import SearchTaskForm from "./SearchTaskForm";

import css from "./FilterBar.module.css";

type Props = {
  filterOption: "all" | "done" | "inProgress";
  setFilterOption: React.Dispatch<
    React.SetStateAction<"all" | "done" | "inProgress">
  >;
};

const FilterBar = ({ filterOption, setFilterOption }: Props) => {
  return (
    <div className={css.wrapper}>
      <SearchTaskForm filterOption={filterOption} />
      <Filter filterOption={filterOption} setFilterOption={setFilterOption} />
    </div>
  );
};

export default FilterBar;
