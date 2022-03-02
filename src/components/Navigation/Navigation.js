import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = function () {
  return (
    <div className={styles["navigation"]}>
      <ul className={styles["navigation__list"]}>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="menu/all">All</NavLink>
        </li>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="menu/breakfast">Breakfast</NavLink>
        </li>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="menu/lunch">Lunch</NavLink>
        </li>
        <li className={styles["navigation__list-item"]}>
          <NavLink to="menu/shakes">Shakes</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
