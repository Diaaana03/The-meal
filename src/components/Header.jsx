import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <NavLink to="/" className={classes.header__link}>
          The Meal
        </NavLink>
      </header>
    </>
  );
}

export default Header;
