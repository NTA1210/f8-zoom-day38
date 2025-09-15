import classNames from "classnames/bind";

//scss
import styles from "./RenderPropsDemo.module.scss";

// Comp

import { DataFetcher, Loading } from "@/components";

const cx = classNames.bind(styles);

function RenderPropsDemo() {
  return (
    <div className={cx("wrapper")}>
      <h2>Render Props Demo</h2>
      <div className={cx("container")}>
        <DataFetcher url="https://jsonplaceholder.typicode.com/posts?_limit=5">
          {({ data, loading, error }) => {
            if (loading) return <Loading />;
            if (error) return <div>Error: {error.message}</div>;
            return (
              <div>
                <h3>Posts</h3>
                <div className={cx("posts")}>
                  {data?.map((post) => (
                    <div className={cx("post")} key={post.id}>
                      {post.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        </DataFetcher>
        <DataFetcher url="https://jsonplaceholder.typicode.com/users?_limit=5">
          {({ data, loading, error }) => {
            if (loading) return <Loading />;
            if (error) return <div>Error: {error.message}</div>;
            return (
              <div>
                <h3>Users</h3>
                <div className={cx("users")}>
                  {data?.map((user) => (
                    <div className={cx("user")} key={user.id}>
                      {user.name} - {user.email}
                    </div>
                  ))}
                </div>
              </div>
            );
          }}
        </DataFetcher>
      </div>
    </div>
  );
}

export default RenderPropsDemo;
