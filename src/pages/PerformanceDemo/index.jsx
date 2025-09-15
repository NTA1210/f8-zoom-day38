import classNames from "classnames/bind";
import { useState, useCallback, useMemo } from "react";

//scss
import styles from "./PerformanceDemo.module.scss";

// Comp
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

const cx = classNames.bind(styles);

function PerformanceDemo() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    "apple",
    "banana",
    "cherry",
    "apple",
    "banana",
    "cherry",
  ]);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleReset = useCallback(() => {
    setCount((prev) => 0);
  }, []);

  const handleAddItem = useCallback(() => {
    const index = (Math.random() * items.length) | 0;
    setItems((prev) => [...prev, items[index]]);
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Performance Demo</h2>

      <div className={cx("container")}>
        {/* COUNTER */}
        <div className={cx("counter")}>
          <div className={cx("counter-board")}>
            <CounterDisplay count={count} />
            <ActionButtons
              onIncrement={handleIncrement}
              onReset={handleReset}
            />
          </div>
        </div>

        {/* EXPENSIVE CHILD */}
        <div className={cx("expensive-child")}>
          <ExpensiveChild items={items} />
          <button className={cx("btn")} onClick={handleAddItem}>
            Add more item
          </button>
        </div>
      </div>
    </div>
  );
}

export default PerformanceDemo;
