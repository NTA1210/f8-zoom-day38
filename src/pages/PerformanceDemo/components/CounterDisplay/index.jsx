import classNames from "classnames/bind";
import { memo } from "react";

//scss
import styles from "./CounterDisplay.module.scss";

const cx = classNames.bind(styles);

function CounterDisplay({ count }) {
  console.log("CounterDisplay render");

  return (
    <div className={cx("counter")}>
      <span
        className={cx("count")}
        style={{ color: count > 0 ? "green" : count < 0 ? "red" : "gray" }}
      >
        {count}
      </span>
    </div>
  );
}

export default memo(CounterDisplay);
