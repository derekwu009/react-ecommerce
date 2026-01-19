import "./Header.css";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar } from "./Navbar";

const Logo = () => {
  return (
    <div className="logo">
      <span className="store-title">FOREVER 67</span>
    </div>
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
