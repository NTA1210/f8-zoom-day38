import classNames from "classnames/bind";

//scss
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("loading")}></div>
    </div>
  );
}

export default Loading;
