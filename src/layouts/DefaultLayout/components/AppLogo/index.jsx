import classNames from "classnames/bind";
import { Link } from "react-router";

// scss
import styles from "./AppLogo.module.scss";

// icon
import logo from "@/assets/images/f8-logo.png";

const cx = classNames.bind(styles);

function AppLogo() {
  return (
    <Link to="/" className={cx("wrapper")}>
      <img src={logo} alt="logo" className={cx("logo")} />
      <p className={cx("text")}>Học lập trình để đi làm</p>
    </Link>
  );
}

export default AppLogo;
