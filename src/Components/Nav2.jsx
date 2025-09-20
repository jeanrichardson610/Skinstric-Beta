import React from "react";
import "./Nav2.css";
import left_bracket from "../Assets/Rectangle 2710.png";
import right_bracket from "../Assets/Rectangle 2711.png";
import { useLocation, Link } from "react-router-dom";

function Nav2() {
  const location = useLocation();

  return (
    <div className="nav2__row">
      <div className="nav2__logo">
        <Link to="/" className="nav2__logo__btn">
          SKINSTRIC
        </Link>
        <div className="nav2__intro__wrapper">
          <img src={left_bracket} alt="" className="nav2__bracket" />
          <p>
           ANALYSIS
          </p>
          <img src={right_bracket} alt="" className="nav2__bracket" />
        </div>
      </div>

      {location.pathname === "/" && (
        <button className="nav2__btn">ENTER CODE</button>
      )}
    </div>
  );
}

export default Nav2;
