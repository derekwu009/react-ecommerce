import "./Breadcrumbs.css";
import { NavLink } from "react-router-dom";

export const BreadCrumbs = ({ page }) => {
  return (
    <div className="header-wrapper">
      <div className="breadcrumbs">
        <NavLink to="/">Home</NavLink>
        <span> / {page}</span>
        <h1>{page}</h1>
      </div>
    </div>
  );
};
