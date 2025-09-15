import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";

//icon
import BellIcon from "@/assets/icons/BellIcon";

// scss
import styles from "./Notification.module.scss";

// Comp
import NotificationItem from "./NotificationItem";

const cx = classNames.bind(styles);

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    function onClickOutSide(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", onClickOutSide);
    return () => {
      document.removeEventListener("click", onClickOutSide);
    };
  }, []);

  return (
    <div
      className={cx("wrapper")}
      ref={wrapperRef}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={cx("icon")}>
        <BellIcon />
        <span className={cx("count")}>5</span>
      </div>
      {isOpen && (
        <div className={cx("dropdown")}>
          <header className={cx("header")}>
            <h6 className={cx("title-notification")}>Thông báo</h6>
            <button className={cx("viewAllBtn")}>Đánh dấu đã đọc</button>
          </header>
          <div className={cx("list")}>
            {[...Array(10)].map((item, index) => (
              <NotificationItem key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
