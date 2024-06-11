import React from "react";
import { Link } from "react-router-dom";
import classes from "./Main.module.css";

function Main() {
  return (
    <>
      <div className={classes.main}>
        <section className={classes.random__meal}>
          <div className={classes.random__meal_text}>
            <h2 className={classes.random__meal_h2}>Meal of the Day</h2>
            <p className={classes.random__meal_title}>
              <Link to="#">title</Link>
            </p>
            <p className={classes.random__meal_info}>type</p>
          </div>
          <div className={classes.random__meal_img}></div>
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
}

export default Main;
