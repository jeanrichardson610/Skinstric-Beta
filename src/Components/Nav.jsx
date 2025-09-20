import React, { useEffect, useState } from "react";
import "./Nav.css";
import left_bracket from "../Assets/Rectangle 2710.png";
import right_bracket from "../Assets/Rectangle 2711.png";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const [navText, setNavText] = useState("INTRO");

  useEffect(() => {
    if (location.pathname === "/results" || location.pathname === "/demographics") {
      setNavText("ANALYSIS");
    } else {
      setNavText("INTRO");
    }
  }, [location]);

  return (
    <div className="nav__row">
      <div className="nav__logo">
        <a href="/" className="logo__btn">
          SKINSTRIC
        </a>
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
