import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = ({ direction }) => {
  return (
    <nav className={`navbar-links ${direction}`}>
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
            to="/best-sellers"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            BEST SELLERS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/editors-choice"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            EDITOR'S CHOICE
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
