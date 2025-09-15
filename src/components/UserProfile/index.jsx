// UserProfile component - KHÔNG có logic xử lý loading
import { withLoading } from "@/hoc";
import classNames from "classnames/bind";

//scss
import styles from "./UserProfile.module.scss";

const cx = classNames.bind(styles);

function UserProfile() {
  return (
    <div classNames={cx("wrapper")}>
      <h3>User Profile</h3>
      <p>Name: John Doe</p>
      <p>Email: john@example.com</p>
    </div>
  );
}

export default withLoading(UserProfile);
