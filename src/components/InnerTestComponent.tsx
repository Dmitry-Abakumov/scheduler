import { MouseEvent } from "react";

const InnerTestComponent = ({
  setIsShow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <label
        htmlFor="1"
        onClick={(e: MouseEvent<HTMLLabelElement>) => {
          setIsShow((prev) => !prev);

          e.stopPropagation();
        }}
      >
        1
      </label>
      <label
        htmlFor="2"
        onClick={(e: MouseEvent<HTMLLabelElement>) => {
          setIsShow((prev) => !prev);

          e.stopPropagation();
        }}
      >
        2
      </label>
    </>
  );
};

export default InnerTestComponent;
