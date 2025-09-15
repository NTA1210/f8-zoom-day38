import classNames from "classnames/bind";

//scss
import styles from "./CustomHooksDemo.module.scss";

//hooks
import { useApi, useToggle } from "@/hooks";

const cx = classNames.bind(styles);

function PostsList() {
  const { data, loading, error, refetch } = useApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={cx("wrapper-posts")}>
      <button className={cx("btn")} onClick={refetch}>
        Refetch Data
      </button>
      <div className={cx("posts")}>
        {data?.map((item) => (
          <div className={cx("post")} key={item.id}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function UsersList() {
  const [isVisible, toggleVisible, setVisible] = useToggle(false);
  console.log("Visible: ", isVisible);

  return (
    <div className={cx("wrapper-users")}>
      <button className={cx("btn")} onClick={toggleVisible}>
        {isVisible ? "Hide" : "Show"} Content
      </button>
      <button className={cx("btn")} onClick={() => setVisible(true)}>
        Force Show
      </button>

      {isVisible && <div>This content can be toggled!</div>}
    </div>
  );
}

function CustomHooksDemo() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>Custom Hooks Demo</h1>
      <div className={cx("container")}>
        <PostsList />
        <UsersList />
      </div>
    </div>
  );
}

export default CustomHooksDemo;
