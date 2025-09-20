import React from "react";
import "./Nav.css";
import left_bracket from "../Assets/Rectangle 2710.png";
import right_bracket from "../Assets/Rectangle 2711.png";
import { useLocation, Link } from "react-router-dom";

function Nav() {
  const location = useLocation();

  // Derive navText directly (no state needed)
  const navText =
    location.pathname === "/results" || location.pathname === "/demographics"
      ? "ANALYSIS"
      : "INTRO";

  return (
    <div className="nav__row">
      <div className="nav__logo">
        {/* Use Link so React Router handles navigation client-side */}
        <Link to="/" className="logo__btn">
          SKINSTRIC
        </Link>
        <div className="intro__wrapper">
          <img src={left_bracket} alt="" className="bracket" />
          <p>{navText}</p>
          <img src={right_bracket} alt="" className="bracket" />
        </div>
      </div>

      {location.pathname === "/" && (
        <button className="nav__btn">ENTER CODE</button>
      )}
    </div>
  );
}

export default Nav;
