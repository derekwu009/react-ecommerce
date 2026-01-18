import "./Navbar.css";
import { useState } from "react";

const NavbarDropdownMenu = () => {
  return (
    <ul className="dropdown-menu">
      <li>
        <a href="/genres/fiction">Nonfiction</a>
      </li>
      <li>
        <a href="/genres/fiction">Fiction</a>
      </li>
      <li>
        <a href="/genres/fiction">Mystery</a>
      </li>
      <li>
        <a href="/genres/fiction">Thriller</a>
      </li>
    </ul>
  );
};

const NavbarDropdown = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseHover = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <li
      className="genres"
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseLeave}
    >
      <button className="genres-btn">Genres</button>
      {isDropdownVisible && <NavbarDropdownMenu />}
    </li>
  );
};

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>

        <NavbarDropdown />

        <li>
          <a href="/best-sellers">Best Sellers</a>
        </li>
      </ul>
    </nav>
  );
};
