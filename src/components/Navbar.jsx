import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-links">
      <ul>
        <li>
          <NavLink
            to="/all-books"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            ALL BOOKS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new-arrivals"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            NEW ARRIVALS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/best-seller"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            BEST SELLER
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/editors-pick"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            EDITORS PICK
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
