import clsx from "clsx"
import css from "./NavLink.module.css"
const NavLink = () => {
    const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
    return (
    <nav>
              <NavLink to="/" className={buildLinkClass}>Home</NavLink>
              <NavLink to="/src/pages/MoviesPage"className={buildLinkClass}>Movies</NavLink>
      </nav>
  )
}

export default NavLink
