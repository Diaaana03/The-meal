import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Main.module.css";

const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";

export const Main = () => {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const randomMeal = async () => {
      try {
        const response = await axios.get(randomURL);
        setMeal(response.data.meals[0]);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching random meal:", error);
      }
    };
    randomMeal();
  }, []);
  return (
    <>
      <div className={classes.main}>
        <section className={classes.random__meal}>
          <div className={classes.random__meal_text}>
            <h2 className={classes.random__meal_h2}>Meal of the Day</h2>
            <p className={classes.random__meal_title}>
              <Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
            </p>
            <p className={classes.random__meal_info}>
              {meal.strCategory} | {meal.strArea}
            </p>
          </div>
          <div className={classes.random__meal_img}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        </section>
        <section className={classes.form}>
          <h2 className={classes.search__h2}>Find your Meal</h2>
          <form className={classes.search__form}>
            <input
              type="text"
              placeholder="Find your meal"
              className={classes.search__form_input}
            />
            <button type="submit" className={classes.search__form_btn}>
              Search
            </button>
          </form>
        </section>
      </div>
    </>
  );
};
