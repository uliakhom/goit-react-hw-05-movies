import { NavLink } from "react-router-dom";
import "./headerMenu.css";

const getActiveLink = ({ isActive }) => {
  return isActive ? "menu-link link-active" : "menu-link";
};

const HeaderMenu = () => {
  return (
    <ul className="menu">
      <li>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/movies" className={getActiveLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
