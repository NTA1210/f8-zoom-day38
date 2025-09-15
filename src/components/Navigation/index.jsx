import { NavLink } from "react-router";
import classNames from "classnames/bind";

// scss
import styles from "./Navigation.module.scss";

const cx = classNames.bind(styles);

const routes = [
  { path: "/", name: "Home" },
  { path: "/modal-demo", name: "Modal" },
  { path: "/scroll-demo", name: "Scroll" },
  { path: "/profile", name: "Profile" },
  { path: "/performance-demo", name: "Performance" },
  { path: "/focus-demo", name: "Focus" },
  { path: "/hoc-demo", name: "HOC" },
  { path: "/render-props-demo", name: "Render Props" },
  { path: "/custom-hooks-demo", name: "Custom Hooks" },
];

function Navigation() {
  return (
    <ul className={cx("list")}>
      {routes.map((route) => (
        <li key={route.path} className={cx("item")}>
          <NavLink
            className={({ isActive }) => cx(isActive && "active")}
            to={route.path}
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
