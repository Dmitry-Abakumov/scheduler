import { ImCheckmark } from "react-icons/im";

import css from "./Checkbox.module.css";
import { ChangeEvent } from "react";

type Props = {
  checked: boolean;
  onCheckboxChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ checked, onCheckboxChange }: Props) => {
  return (
    <label
      className={checked ? `${css.checkbox} ${css.checked}` : `${css.checkbox}`}
    >
      {checked && <ImCheckmark className={css.icon} />}
      <input
        type="checkbox"
        checked={checked}
        onChange={onCheckboxChange}
        className={css.hide}
      />
    </label>
  );
};

export default Checkbox;
