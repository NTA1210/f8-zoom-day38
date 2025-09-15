import logo from "@/assets/images/f8-logo.png";

import classNames from "classnames/bind";
import styles from "./Notification.module.scss";

const cx = classNames.bind(styles);
function NotificationItem() {
  const handleClick = () => {
    window.open("https://fullstack.edu.vn", "_blank");
  };
  return (
    <div className={cx("item")} onClick={() => handleClick()}>
      <div className={cx("logo")}>
        <img src={logo} alt="logo" />
      </div>
      <div className={cx("info")}>
        <p className={cx("title")}>
          Bài học <strong>Tóm tắt chương</strong> mới được thêm vào.
        </p>
        <p className={cx("time")}>2 ngày trước</p>
      </div>
    </div>
  );
}

export default NotificationItem;
