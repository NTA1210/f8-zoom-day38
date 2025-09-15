import classNames from "classnames/bind";
import { useState, useEffect, useRef } from "react";

// scss
import styles from "./MyCourses.module.scss";

//images
import course1 from "@/assets/images/course1.png";

const cx = classNames.bind(styles);

const fakeDatas = [
  { icon: course1, title: "Fullstack Web", process: 2 },
  { icon: course1, title: "Fullstack Web", process: 45 },
  { icon: course1, title: "Fullstack Web", process: 22 },
  { icon: course1, title: "Fullstack Web", process: 90 },
];

function MyCourses() {
  const [data, setData] = useState(fakeDatas);
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
      <div className={cx("title")}>Khóa học của tôi</div>

      {isOpen && (
        <div className={cx("dropdown")}>
          <div className={cx("heading")}>
            <p className={cx("title")}>Khóa học của tôi</p>
            <button className={cx("viewAllBtn")}>Xem tất cả</button>
          </div>

          <div className={cx("list")}>
            {data.map((item, index) => (
              <div className={cx("item")} key={index}>
                <img src={item.icon} alt="icon" className={cx("icon")} />
                <div className={cx("description")}>
                  <p className={cx("title")}>{item.title}</p>
                  <p className={cx("time")}>Học cách đây một ngày trước</p>
                  <div className={cx("progress-bar")}>
                    <div
                      className={cx("progress")}
                      style={{ width: `${item.process}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MyCourses;
