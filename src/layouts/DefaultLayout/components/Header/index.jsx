import classNames from "classnames/bind";

//scss
import styles from "./Header.module.scss";

// Comp
import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import UserMenu from "../UserMenu";
import Notification from "../Notification";
import MyCourses from "../MyCourses";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <AppLogo />
      <div className={cx("search-form")}>
        <SearchForm />
      </div>
      <div className={cx("actions")}>
        <MyCourses />
        <Notification />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
