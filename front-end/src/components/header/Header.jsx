import "./Header.css";
import logo from "../../assets/forever67-logo.svg";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar } from "../navbar/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const scrollToTop = () => {
  window.scrollTo(top);
};

const Logo = () => {
  return (
    <Link to="/" onClick={scrollToTop}>
      <div className="logo">
        <img className="logo-img" src={logo} alt="Book Store" />
      </div>
    </Link>
  );
};

const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <Link to="account" className="header-btn user-btn">
      <FiUsers className="user-icon" />{" "}
      {user?.user_name?.toUpperCase() || "ACCOUNT"}
    </Link>
  );
};

const Cart = () => {
  return (
    <Link to="cart" className="header-btn cart-btn">
      <FiShoppingCart className="cart-icon" /> CART
    </Link>
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
      <Navbar direction="horizontal" />
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
