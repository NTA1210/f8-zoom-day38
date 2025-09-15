import classNames from "classnames/bind";

// scss
import styles from "./SearchForm.module.scss";

const cx = classNames.bind(styles);

function ItemSearch({ item }) {
  const { icon, description } = item;
  return (
    <div className={cx("item")}>
      <img src={icon} alt="icon" className={cx("icon")} />
      <p className={cx("description")}>{description}</p>
    </div>
  );
}

export default ItemSearch;
