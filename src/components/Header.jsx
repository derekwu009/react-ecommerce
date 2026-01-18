import "./Header.css";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { Navbar } from "./Navbar";

const Logo = () => {
  return (
    <div className="logo">
      <span className="store-title">FOREVER 67</span>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search books" autoComplete="off" />
      <FiSearch className="search-icon" />
    </div>
  );
};

const User = () => {
  return (
    <span className="user">
      <FiUsers className="user-icon" /> ACCOUNT
    </span>
  );
};

const Cart = () => {
  return (
    <span className="cart">
      <FiShoppingCart className="cart-icon" /> CART
    </span>
  );
};

export const Header = () => {
  return (
    <header className="header-container">
      {/* LEFT SIDE HEADER */}
      <div className="left-elements">
        <Logo />
        <Navbar />
      </div>

      {/* RIGHT SIDE HEADER */}
      <div className="right-elements">
        <SearchBar />
        <User />
        <Cart />
      </div>
    </header>
  );
};
