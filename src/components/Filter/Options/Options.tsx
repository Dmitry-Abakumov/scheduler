import { useEffect, useCallback } from "react";

import css from "./Options.module.css";

type Props = {
  isOptionsShow: boolean;
  toggleOptions: () => void;
};

const bodyRef = document.querySelector("body");

const Options = ({ isOptionsShow, toggleOptions }: Props) => {
  const onEscapePress = useCallback(
    (e: KeyboardEvent) => {
      console.log(e.code);
      if (e.code !== "Escape") return;

      toggleOptions();
    },
    [toggleOptions]
  );

  useEffect(() => {
    setTimeout(() => {
      bodyRef?.addEventListener("click", toggleOptions);
      document.addEventListener("keydown", onEscapePress);
    }, 500);

    return () => {
      bodyRef?.removeEventListener("click", toggleOptions);
      document.removeEventListener("keydown", onEscapePress);
      console.log("options размонтировались");
    };
  }, [onEscapePress, toggleOptions]);

  return (
    <div className={isOptionsShow ? `${css.labelWrapper}` : `${css.hide}`}>
      <label htmlFor="all" onClick={toggleOptions} className={css.label}>
        all
      </label>
      <label htmlFor="done" onClick={toggleOptions} className={css.label}>
        done
      </label>
      <label
        htmlFor="in progress"
        onClick={toggleOptions}
        className={css.label}
      >
        in progress
      </label>
    </div>
  );
};

export default Options;
