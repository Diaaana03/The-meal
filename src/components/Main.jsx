import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import classes from "./Main.module.css";

const randomURL = "https://www.themealdb.com/api/json/v1/1/random.php";
const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const Main = () => {
  const [meal, setMeal] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const randomMeal = async () => {
      try {
        const response = await axios.get(randomURL);
        setMeal(response.data.meals[0]);
      } catch (error) {
        console.log("Error fetching random meal:", error);
      }
    };
    randomMeal();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTitle) return;
    setNoResults(false);
    try {
      const response = await axios.get(`${searchURL}${searchTitle}`);
      const results = response.data.meals || [];
      setSearchResults(results);
      if (results.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error searching meals:", error);
      setNoResults(true);
    }
  };
  return (
    <>
      <div className={classes.main}>
        <section className={classes.random__meal}>
          <div className={classes.random__meal_text}>
            <h2 className={classes.random__meal_h2}>Meal of the Day</h2>
            <p className={classes.random__meal_title}>
              <Link to={`/meal/${meal.idMeal || ""}`}>{meal.strMeal}</Link>
            </p>
            <p className={classes.random__meal_info}>
              {meal.strCategory} | {meal.strArea}
            </p>
          </div>
          <div className={classes.random__meal_img}>
            <img
              className={classes.random__meal_img}
              src={meal.strMealThumb}
              alt={meal.strMeal}
            />
          </div>
        </section>
        <section className={classes.form}>
          <h2 className={classes.search__h2}>Find your Meal</h2>
          <form className={classes.search__form} onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your meal"
              className={classes.search__form_input}
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <button type="submit" className={classes.search__form_btn}>
              Search
            </button>
          </form>
          <div className="search-results">
            {noResults && <div>No Results</div>}
            {searchResults.map((result) => (
              <Link
                to={`/meal/${result.idMeal}`}
                key={result.idMeal}
                className={classes.search__result_item}
              >
                <div className={classes.meal__block}>
                  <img src={result.strMealThumb} alt={result.strMeal} />
                  <div>
                    <h3 className={classes.meal__block_h3}>{result.strMeal}</h3>
                    <p className={classes.meal__block_info}>
                      {result.strCategory} | {result.strArea}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
