import classNames from "classnames/bind";
import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";

//icon
import user_logo from "@/assets/images/user-logo.png";

// scss
import styles from "./UserMenu.module.scss";

const cx = classNames.bind(styles);

function UserMenu() {
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
      <div className={cx("avatar")}>
        <img src={user_logo} alt="user-logo" className={cx("logo")} />
        <img
          className={cx("crown")}
          alt="crown"
          src="data:image/svg+xml,%3csvg%20width='10'%20height='11'%20viewBox='0%200%2010%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.39379%209.23321C9.0651%209.45156%208.65127%209.35571%208.44241%209.04131C8.43292%209.02701%208.43292%209.02701%208.43292%209.02701L3.97587%2010.9373C3.74252%2011.0512%203.45241%2010.9555%203.31001%2010.7412L0.16768%206.01085C0.0252788%205.79648%200.0495717%205.49198%200.244949%205.321L3.73367%201.95298C3.73367%201.95298%203.73367%201.95298%203.72418%201.93869C3.51533%201.62429%203.58739%201.20567%203.91608%200.987317C4.23048%200.778461%204.6586%200.864817%204.86746%201.17922C5.06682%201.47933%204.98996%201.92174%204.67556%202.13059C4.54694%202.21604%204.39464%202.23482%204.24713%202.22982L4.07259%204.19953C4.05299%204.54211%204.3428%204.82333%204.68548%204.78107L6.87956%204.5182C6.87517%204.29455%206.97071%204.0663%207.18508%203.9239C7.49948%203.71504%207.9276%203.8014%208.14594%204.13009C8.3548%204.44449%208.25895%204.85832%207.94455%205.06718C7.73019%205.20958%207.48275%205.20917%207.26879%205.10413L6.17594%207.02475C6.00415%207.32425%206.16054%207.7147%206.48392%207.82944L8.35779%208.41781C8.41985%208.29419%208.5057%208.17537%208.63432%208.08993C8.94872%207.88107%209.36734%207.95314%209.58569%208.28183C9.79455%208.59623%209.70819%209.02435%209.39379%209.23321Z'%20fill='%23F5C70E'/%3e%3c/svg%3e"
        />
      </div>
      {isOpen && (
        <div className={cx("dropdown")}>
          <div className={cx("user")}>
            <div className={cx("avatar")}>
              <img src={user_logo} alt="user-logo" className={cx("logo")} />
              <img
                className={cx("crown")}
                alt="crown"
                src="data:image/svg+xml,%3csvg%20width='10'%20height='11'%20viewBox='0%200%2010%2011'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.39379%209.23321C9.0651%209.45156%208.65127%209.35571%208.44241%209.04131C8.43292%209.02701%208.43292%209.02701%208.43292%209.02701L3.97587%2010.9373C3.74252%2011.0512%203.45241%2010.9555%203.31001%2010.7412L0.16768%206.01085C0.0252788%205.79648%200.0495717%205.49198%200.244949%205.321L3.73367%201.95298C3.73367%201.95298%203.73367%201.95298%203.72418%201.93869C3.51533%201.62429%203.58739%201.20567%203.91608%200.987317C4.23048%200.778461%204.6586%200.864817%204.86746%201.17922C5.06682%201.47933%204.98996%201.92174%204.67556%202.13059C4.54694%202.21604%204.39464%202.23482%204.24713%202.22982L4.07259%204.19953C4.05299%204.54211%204.3428%204.82333%204.68548%204.78107L6.87956%204.5182C6.87517%204.29455%206.97071%204.0663%207.18508%203.9239C7.49948%203.71504%207.9276%203.8014%208.14594%204.13009C8.3548%204.44449%208.25895%204.85832%207.94455%205.06718C7.73019%205.20958%207.48275%205.20917%207.26879%205.10413L6.17594%207.02475C6.00415%207.32425%206.16054%207.7147%206.48392%207.82944L8.35779%208.41781C8.41985%208.29419%208.5057%208.17537%208.63432%208.08993C8.94872%207.88107%209.36734%207.95314%209.58569%208.28183C9.79455%208.59623%209.70819%209.02435%209.39379%209.23321Z'%20fill='%23F5C70E'/%3e%3c/svg%3e"
              />
            </div>
            <div className={cx("user-info")}>
              <p className={cx("name")}>Nguyễn Tuấn Anh</p>
              <p className={cx("email")}>@nguyentuananh129</p>
            </div>
          </div>
          <div className={cx("menu")}>
            <hr className={cx("line")} />

            <ul className={cx("list")}>
              <li>
                <Link to="/">Trang cá nhân</Link>
              </li>
            </ul>
            <hr className={cx("line")} />
            <ul className={cx("list")}>
              <li>
                <Link to="/">Viết blog</Link>
                <Link to="/">Bài viết của tôi</Link>
                <Link to="/">Bài viết đã lưu</Link>
              </li>
            </ul>
            <hr className={cx("line")} />
            <ul className={cx("list")}>
              <li>
                <Link to="/">Cài đặt</Link>
                <Link to="/">Đăng xuất</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
