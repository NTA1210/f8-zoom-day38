import classNames from "classnames/bind";
import { useState, useRef, useEffect } from "react";

// scss
import styles from "./SearchForm.module.scss";

// icon
import DeleteIcon from "@/assets/icons/DeleteIcon";

//Comp
import ItemSearch from "./ItemSearch";

const cx = classNames.bind(styles);

const fakeDatas = [
  {
    heading: "KHÓA HỌC",
    data: [
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        description: "Xây Dựng Website với ReactJS",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png",
        description: "App Đừng Chạm Tay Lên Mặt",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
        description: "JavaScript Pro",
      },
    ],
  },
  {
    heading: "BÀI VIẾT",
    data: [
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        description: "Xây Dựng Website với ReactJS",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png",
        description: "App Đừng Chạm Tay Lên Mặt",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
        description: "JavaScript Pro",
      },
    ],
  },
  {
    heading: "VIDEO",
    data: [
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
        description: "Xây Dựng Website với ReactJS",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png",
        description: "App Đừng Chạm Tay Lên Mặt",
      },
      {
        icon: "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
        description: "JavaScript Pro",
      },
    ],
  },
];

function SearchForm() {
  const [value, setValue] = useState("");
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
      onFocus={() => setIsOpen(true)}
    >
      <div className={cx("search-icon")}></div>
      <input
        type="text"
        className={cx("input")}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tìm kếm khóa học, bài viết, video, ..."
      />
      <div className={cx("clear-text")} onClick={() => setValue("")}>
        {value.length > 0 && <DeleteIcon />}
      </div>

      {isOpen && value.length > 0 && (
        <div className={cx("search-results")}>
          <div className={cx("header")}>
            <div className={cx("search-icon")}></div>
            <p className={cx("text")}>Kết quả cho '{value}'</p>
          </div>
          {fakeDatas.map((item, index) => {
            return (
              <div className={cx("group-result")} key={index}>
                <div className={cx("heading")}>
                  <p className={cx("text-heading")}>{item.heading}</p>
                  <p className={cx("text")}>Xem thêm</p>
                </div>
                <div className={cx("items")}>
                  {item.data.map((item, index) => {
                    return <ItemSearch item={item} key={index} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchForm;
