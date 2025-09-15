import classNames from "classnames/bind";
import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";

//scss
import styles from "./CustomInput.module.scss";

const cx = classNames.bind(styles);

function CustomInput({ label, placeholder, value, onChange }, ref) {
  const inputRef = useRef();
  const renderCount = useRef(0);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus: () => {
          inputRef.current.focus();
        },
        blur: () => {
          inputRef.current.blur();
        },
        getValue: () => {
          return inputRef.current.value;
        },
      };
    },
    []
  );

  return (
    <div className={cx("wrapper")}>
      <label form="input" className={cx("label")}>
        {label}
      </label>
      <input
        ref={inputRef}
        id="input"
        className={cx("input")}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default forwardRef(CustomInput);
