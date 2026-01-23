import "./Footer.css";
import logo from "../../assets/forever67-logo.svg";
import { Navbar } from "../navbar/Navbar";
import { NavLink } from "react-router-dom";

const LogoFooter = () => {
  return (
    <div className="company-brand">
      <img className="logo-img" src={logo} alt="Book Store" />
    </div>
  );
};

const QuickLinks = () => {
  return (
    <div className="quick-links-footer">
      <div className="quick-links-wrapper">
        <h1 className="quick-links-header">Discover</h1>
        <Navbar />
      </div>
    </div>
  );
};

const MyAccount = () => {
  return (
    <div className="my-account-footer">
      <div className="my-account-wrapper">
        <h1>My Account</h1>
        <NavLink to="cart">View Cart</NavLink>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <LogoFooter />
      <QuickLinks />
      <MyAccount />
    </footer>
  );
};
