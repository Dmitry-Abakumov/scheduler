import { useState } from "react";
import InnerTestComponent from "./InnerTestComponent";

const TestComponent = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <input name="test" value="1" type="radio" id="1" />
      <input name="test" value="2" type="radio" id="2" />
      {isShow && <InnerTestComponent setIsShow={setIsShow} />}
      <button onClick={() => setIsShow((prev) => !prev)}>
        show/hode labels
      </button>
    </>
  );
};

export default TestComponent;
