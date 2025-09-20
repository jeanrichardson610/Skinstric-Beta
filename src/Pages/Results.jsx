import React, { useState } from "react";
import "./Results.css";
import Nav from "../Components/Nav";

import Small_Square from "../Assets/Rectangle 2778.png";
import { Link } from "react-router-dom";

function Results() {
  const [scale, setScale] = useState("");
  const [bigScale, setBigScale] = useState("")
  const [biggerScale, setBiggerScale] = useState("")
  const [opacity, setOpacity] = useState("");
  const [bigOpacity, setBigOpacity] = useState("");
  const [biggerOpacity, setBiggerOpacity] = useState("");
  return (
    <>
      <Nav />
      <div className="results">
        <div className="results__title">A.I. ANALYSIS</div>
        <div className="results__description">
          A.I. HAS ESTIMATED THE FOLLOWING. <br />
          FIX ESTIMATED INFORMATION IF NEEDED.
        </div>
      </div>
      <div className="results__options--wrapper">
        <div className="results__options">
          <div className="results__options--rotate">
            <div className="results__upper">
              <div className="results__option upper__option">
                <Link to="/demographics">
                  <button
                    className="dark__gray dark__gray--hover scale--hover"
                    onMouseEnter={() => {
                      setScale("1.08");
                      setOpacity("1");
                    }}
                    onMouseLeave={() => {
                      setScale("0");
                      setOpacity("0");
                    }}
                  >
                    <span>DEMOGRAPHICS</span>
                  </button>
                </Link>
              </div>
              <div className="results__option">
                
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setBigScale("1.15");
                      setBigOpacity("1");
                    }}
                    onMouseLeave={() => {
                      setBigScale("0");
                      setBigOpacity("0");
                    }}
                  >
                    <span>
                      COSMETIC <br />
                      CONCERNS
                    </span>
                  </button>
                
              </div>
            </div>
            <div className="results_lower">
              <div className="results__option upper__option">
                
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setBigScale("1.15");
                      setBigOpacity("1");
                    }}
                    onMouseLeave={() => {
                      setBigScale("0");
                      setBigOpacity("0");
                    }}
                  >
                    <span>SKIN TYPE DETAILS</span>
                  </button>
                
              </div>
              <div className="results__option">
                
                  <button
                    className="light__gray dark__gray--hover no-pointer"
                    onMouseEnter={() => {
                      setBiggerScale("1.2");
                      setBiggerOpacity("1");
                    }}
                    onMouseLeave={() => {
                      setBiggerScale("0");
                      setBiggerOpacity("0");
                    }}
                  >
                    <span>WEATHER</span>
                  </button>
                
              </div>
            </div>
          </div>
        </div>
        <img
          src={Small_Square}
          alt="small square"
          className="small__square--results"
          style={{
            scale: scale,
            opacity: opacity,
          }}
        />
        <img
          src={Small_Square}
          alt="small square"
          className="small__square--results"
          style={{
            scale: bigScale,
            opacity: bigOpacity,
          }}
        />
        <img
          src={Small_Square}
          alt="small square"
          className="small__square--results"
          style={{
            scale: biggerScale,
            opacity: biggerOpacity,
          }}
        />
      </div>
      <div className="intro__btns">
        <Link to="/analysis">
          <div className="back__btn">
            <div className="back__btn--border"></div>
            <div className="back__btn--triangle">▶{"\uFE0E"}</div>
            <div className="back__btn--title">BACK</div>
          </div>
        </Link>
        <Link to="/demographics" className="get__summary--btn">
          <div className="proceed__btn--title">GET SUMMARY</div>
          <div className="proceed__btn--border"></div>
          <div className="proceed__btn--triangle">▶{"\uFE0E"}</div>
        </Link>
      </div>
    </>
  );
}

export default Results;
