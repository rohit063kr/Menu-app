import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Meal from "../components/Meal/Meal";
import styles from "./Home.module.scss";

const Home = function () {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchMealData = async function () {
      const response = await fetch(
        "https://food-menu-78695-default-rtdb.firebaseio.com/menu.json"
      );

      if (!response.ok) throw new Error("something went wronge");

      const data = await response.json();

      const mealDataArr = [];
      for (const item of Object.entries(data)) {
        mealDataArr.push({ ...item[1], id: item[0] });
      }
      setMealData(mealDataArr);
    };

    fetchMealData().catch((err) => console.log(err));
  }, []);

  console.log("home");

  return (
    <Routes>
      <Route
        path=":category"
        element={
          <div className={styles["meal__container"]}>
            {mealData.map((meal) => (
              <Meal key={meal.id} data={meal} />
            ))}
          </div>
        }
      />
    </Routes>
  );
};

export default Home;
