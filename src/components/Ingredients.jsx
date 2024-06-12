import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import classes from "./Ingredients.module.css";

const mealDetailsURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

export const Ingredients = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`${mealDetailsURL}${id}`);
        setMeal(response.data.meals[0]);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };
    fetchMeal();
  }, [id]);
  return (
    <div className={classes.meal__ingredients}>
      {meal && (
        <>
          <section className={classes.meal__ingredients_info}>
            <div className={classes.meal__ingredients_text}>
              <p className={classes.meal__ingredients_title}>{meal.strMeal}</p>
              <p className={classes.meal__ingredients_category}>
                {meal.strCategory} | {meal.strArea}
              </p>
              <div className={classes.meal__ingredients_products}>
                {meal.strIngredient1 && (
                  <p>
                    - {meal.strIngredient1} <b>{meal.strMeasure1}</b>
                  </p>
                )}
                {meal.strIngredient2 && (
                  <p>
                    - {meal.strIngredient2} <b>{meal.strMeasure2}</b>
                  </p>
                )}
                {meal.strIngredient3 && (
                  <p>
                    - {meal.strIngredient3} <b>{meal.strMeasure3}</b>
                  </p>
                )}
                {meal.strIngredient4 && (
                  <p>
                    - {meal.strIngredient4} <b>{meal.strMeasure4}</b>
                  </p>
                )}
                {meal.strIngredient5 && (
                  <p>
                    - {meal.strIngredient5} <b>{meal.strMeasure5}</b>
                  </p>
                )}
                {meal.strIngredient6 && (
                  <p>
                    - {meal.strIngredient6} <b>{meal.strMeasure6}</b>
                  </p>
                )}
                {meal.strIngredient7 && (
                  <p>
                    - {meal.strIngredient7} <b>{meal.strMeasure7}</b>
                  </p>
                )}
                {meal.strIngredient8 && (
                  <p>
                    - {meal.strIngredient8} <b>{meal.strMeasure8}</b>
                  </p>
                )}
                {meal.strIngredient9 && (
                  <p>
                    - {meal.strIngredient9} <b>{meal.strMeasure9}</b>
                  </p>
                )}
                {meal.strIngredient10 && (
                  <p>
                    - {meal.strIngredient10} <b>{meal.strMeasure10}</b>
                  </p>
                )}
              </div>
            </div>
            <div className={classes.meal__ingredients_img}>
              <img
                className={classes.meal__ingredients_img}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
            </div>
          </section>
          <section className={classes.meal__cooking_instruction}>
            <h2 className={classes.meal__cooking_h2}>Instruction</h2>
            <p className={classes.meal__cooking_details}>
              {meal.strInstructions}
            </p>
            {meal.strYoutube && (
              <Link
                to={meal.strYoutube}
                className={classes.meal__cooking_youtube}
              >
                Watch on YouTube
              </Link>
            )}
          </section>
        </>
      )}
    </div>
  );
};
