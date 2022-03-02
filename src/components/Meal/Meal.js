import styles from "./Meal.module.scss";
import { useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";

const Meal = function (props) {
  const params = useParams();

  const content = (
    <div className={styles["meal__box"]}>
      <div className={styles["meal__img-box"]}>
        <img
          src={props.data.img}
          alt={props.data.title}
          className={styles["meal__img"]}
        />
      </div>
      <div className={styles["meal__description"]}>
        <span className={styles["meal__info"]}>
          <p className={styles["meal__title"]}>{props.data.title}</p>
          <p className={styles["meal__cost"]}>${props.data.price}</p>
        </span>
        <div className={styles["meal__about"]}>{props.data.desc}</div>
      </div>
    </div>
  );

  if (params.category === "all") return content;

  return (
    <Fragment>{params.category === props.data.category && content}</Fragment>
  );
};

export default Meal;
