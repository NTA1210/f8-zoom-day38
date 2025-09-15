import classNames from "classnames/bind";
import { memo } from "react";

//scss
import styles from "./ActionButtons.module.scss";

const cx = classNames.bind(styles);

function ActionButtons({ onIncrement, onReset }) {
  console.log("ActionButtons render");

  return (
    <div className={cx("actions")}>
      <button className={cx("btn", "increment")} onClick={onIncrement}>
        Increment
      </button>
      <button className={cx("btn", "reset")} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default memo(ActionButtons);
