import "./Header.css";
import logo from "../assets/forever67-logo.svg";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img className="logo-img" src={logo} alt="Book Store" />
      </div>
    </Link>
  );
};

const User = () => {
  return (
    <button className="header-btn user-btn">
      <FiUsers className="user-icon" /> ACCOUNT
    </button>
  );
};

const Cart = () => {
  return (
    <button className="header-btn cart-btn">
      <FiShoppingCart className="cart-icon" /> CART
    </button>
  );
};

const HeaderLeft = () => {
  return (
    <div className="left-elements">
      <Logo />
    </div>
  );
};

const HeaderMiddle = () => {
  return (
    <div className="middle-elements">
      <Navbar />
    </div>
  );
};

const HeaderRight = () => {
  return (
    <div className="right-elements">
      <User />
      <Cart />
    </div>
  );
};

export const Header = () => {
  return (
    <header className="header-container">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </header>
  );
};
