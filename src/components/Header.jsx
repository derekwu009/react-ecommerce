import "./Header.css";
import { FiUsers } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className="header-container">
      {/* LEFT SIDE HEADER */}
      <div className="left-elements">
        <div className="logo">
          <span className="store-title">FOREVER 67</span>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input type="text" placeholder="Search books" autoComplete="off" />
        <FiSearch className="search-icon" />
      </div>

      {/* RIGHT SIDE HEADER */}
      <div className="right-elements">
        <div className="user">
          <span>
            <FiUsers className="user-icon" /> Account
          </span>
        </div>

        <div className="cart">
          <span>
            <FiShoppingCart className="cart-icon" /> Cart
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
