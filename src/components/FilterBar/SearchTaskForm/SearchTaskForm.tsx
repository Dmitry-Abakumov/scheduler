import TextField from "../../../shared/components/TextField";

const SearchTaskForm = () => {
  return (
    <form>
      <TextField name="taskSearch" type="text" placeholder="Search" />
    </form>
  );
};

export default SearchTaskForm;
