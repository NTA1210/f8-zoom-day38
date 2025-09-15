import classNames from "classnames/bind";
import { useMemo } from "react";

//scss
import styles from "./ExpensiveChild.module.scss";

const cx = classNames.bind(styles);

function ExpensiveChild({ items }) {
  console.log("ExpensiveChild render");

  // Tính toán nặng: tìm item có tên dài nhất
  const longestName = useMemo(() => {
    console.log("Calculating longest name...");
    let longest = "";
    items.forEach((item) => {
      // Thêm delay giả lập tính toán nặng
      for (let i = 0; i < 100000; i++) {}
      if (item.length > longest.length) {
        longest = item;
      }
    });
    return longest;
  }, [items]);

  // const expensiveCalculation = () => {
  //   console.log("Calculating longest name...");
  //   let longest = "";
  //   items.forEach((item) => {
  //     // Thêm delay giả lập tính toán nặng
  //     for (let i = 0; i < 100000; i++) {}
  //     if (item.length > longest.length) {
  //       longest = item;
  //     }
  //   });
  //   return longest;
  // };
  // const longestName = expensiveCalculation();

  return (
    <div className={cx("wrapper")}>
      <h3 className={cx("title")}>Expensive Child</h3>
      <ul className={cx("items")}>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <p className={cx("total-length")}>
        Item with the longest name: {longestName}
      </p>
    </div>
  );
}

export default ExpensiveChild;
