import { useEffect, useState } from "react";
import classNames from "classnames/bind";

//scss
import styles from "./GoToTop.module.scss";

//icon
import { FaAngleDoubleUp } from "react-icons/fa";

const cx = classNames.bind(styles);

function GoToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY >= 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [window.scrollY]);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cx("wrapper")}>
      <button
        className={cx("btn", {
          show,
        })}
        onClick={() => handleClick()}
      >
        <FaAngleDoubleUp />
      </button>
    </div>
  );
}

export default GoToTop;
