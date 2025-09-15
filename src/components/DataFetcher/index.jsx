import classNames from "classnames/bind";
import { useEffect, useState } from "react";

//scss
import styles from "./DataFetcher.module.scss";

// Comp

const cx = classNames.bind(styles);

function DataFetcher({ url, children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className={cx("wrapper")}>{children({ data, loading, error })}</div>
  );
}

export default DataFetcher;
