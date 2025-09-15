import classNames from "classnames/bind";
import { useState } from "react";

//scss
import styles from "./HOCDemo.module.scss";

// Comp
import { UserProfile, ProductList } from "@/components";

const cx = classNames.bind(styles);

function HOCDemo() {
  const [userProfileLoading, setUserProfileLoading] = useState(false);
  const [productListLoading, setProductListLoading] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <h1>HOC Demo</h1>

      <div className={cx("container")}>
        <div className={cx("box")}>
          <button onClick={() => setUserProfileLoading(!userProfileLoading)}>
            Toggle User Loading
          </button>
          <UserProfile isLoading={userProfileLoading} />
        </div>

        <div className={cx("box")}>
          <button onClick={() => setProductListLoading(!productListLoading)}>
            Toggle Product Loading
          </button>
          <ProductList isLoading={productListLoading} />
        </div>
      </div>
    </div>
  );
}

export default HOCDemo;
