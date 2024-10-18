import { Routes, Route, NavLink } from "react-router-dom";
import clsx from "clsx";

import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

import css from "./Navigation.module.css"

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
          <nav className={css.navList}>
              <NavLink to="/" className={buildLinkClass}>Home</NavLink>
              <NavLink to="/movies" className={buildLinkClass}>Movies</NavLink>
         </nav>
      <Routes>
              <Route path="/" element={<HomePage/>}>Home</Route>
              <Route path="/movies" element={<MoviesPage/>}>Movies</Route>
      </Routes>
    </header>
  )
}

export default Navigation
