import classNames from "classnames/bind";
import { useRef, useEffect, useState } from "react";

//scss
import styles from "./FocusDemo.module.scss";

// Comp
import { CustomInput } from "@/components";

const cx = classNames.bind(styles);

function FocusDemo() {
  const input1Ref = useRef();
  const input2Ref = useRef();
  const [values, setValues] = useState({
    input1: "",
    input2: "",
  });
  const count = useRef(0);

  const handleOnChange = (e, field) => {
    setValues({
      ...values,
      [field]: e.target.value,
    });
  };

  const handleClearBoth = () => {
    setValues({
      input1: "",
      input2: "",
    });
  };

  const handleGetValues = () => {
    console.log(
      "Input 1: ",
      input1Ref.current.getValue(),
      " - Input 2: ",
      input2Ref.current.getValue()
    );
  };

  count.current++;

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Focus Demo</h1>

      <div className={cx("fields")}>
        <CustomInput
          label="Custom Input 1"
          placeholder="Custom Input 1"
          value={values?.input1}
          ref={input1Ref}
          onChange={(e) => handleOnChange(e, "input1")}
        />
        <CustomInput
          label="Custom Input 2"
          value={values?.input2}
          placeholder="Custom Input 2"
          ref={input2Ref}
          onChange={(e) => handleOnChange(e, "input2")}
        />
      </div>

      <div className={cx("actions")}>
        <button
          className={cx("btn")}
          onClick={() => {
            input1Ref.current.focus();
          }}
        >
          Focus Input 1
        </button>
        <button
          className={cx("btn")}
          onClick={() => {
            input2Ref.current.focus();
          }}
        >
          Focus Input 2
        </button>
        <button className={cx("btn")} onClick={handleClearBoth}>
          Clear both
        </button>
        <button className={cx("btn")} onClick={handleGetValues}>
          Get Values
        </button>
      </div>
    </div>
  );
}

export default FocusDemo;
