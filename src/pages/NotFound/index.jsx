import classNames from "classnames/bind";

//scss
import styles from "./NotFound.module.scss";

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>NotFound</h1>
    </div>
  );
}

export default NotFound;
