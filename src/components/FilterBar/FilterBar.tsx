import Filter from "./Filter/Filter";

type Props = {
  filterOption: string;
  setFilterOption: React.Dispatch<React.SetStateAction<string>>;
};

const FilterBar = ({ ...props }: Props) => {
  return (
    <>
      <section>
        <hr />
        <Filter {...props} />
        <hr />
      </section>
    </>
  );
};

export default FilterBar;
