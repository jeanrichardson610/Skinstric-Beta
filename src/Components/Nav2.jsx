import React from "react";
import "./Nav.css";
import left_bracket from "../Assets/Rectangle 2710.png";
import right_bracket from "../Assets/Rectangle 2711.png";
import { useLocation, Link } from "react-router-dom";

function Nav2() {
  const location = useLocation();

  return (
    <div className="nav__row">
      <div className="nav__logo">
        <Link to="/" className="logo__btn">
          SKINSTRIC
        </Link>
        <div className="intro__wrapper">
          <img src={left_bracket} alt="" className="bracket" />
          <p>
           ANALYSIS
          </p>
          <img src={right_bracket} alt="" className="bracket" />
        </div>
      </div>

      {location.pathname === "/" && (
        <button className="nav__btn">ENTER CODE</button>
      )}
    </div>
  );
}

export default Nav2;
