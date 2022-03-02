import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.scss";

const Header = function () {
  return (
    <div className={styles["header"]}>
      <h2 className={styles["header__heading"]}>Our menu</h2>
      <Navigation />
    </div>
  );
};

export default Header;
