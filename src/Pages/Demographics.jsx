import React, { useEffect, useState } from "react";
import "./Demographics.css";
import Nav from "../Components/Nav";
import radio_button from "../Assets/radio-button.png";
import radio_button_black from "../Assets/radio-button (1).png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

function Demographics({ demoData }) {
  const [selectedDemo, setSelectedDemo] = useState("race");
  const [percentRace, setPercentRace] = useState(null);
  const [sortedRace, setSortedRace] = useState([]);
  const [correctRace, setCorrectRace] = useState(null);
  const [percentAge, setPercentAge] = useState(null);
  const [sortedAge, setSortedAge] = useState([]);
  const [correctAge, setCorrectAge] = useState(null);
  const [percentGender, setPercentGender] = useState(null);
  const [sortedGender, setSortedGender] = useState([]);
  const [correctGender, setCorrectGender] = useState(null);
  const [displayedPercent, setDisplayedPercent] = useState(null);

  useEffect(() => {
    if (demoData && demoData.race) {
      const raceArray = Object.entries(demoData.race).map(
        ([race, percentage]) => ({
          race,
          percentage,
        })
      );
      const sorted = [...raceArray].sort((a, b) => {
        return b.percentage - a.percentage;
      });
      setSortedRace(sorted);
      if (sorted.length > 0) {
        setCorrectRace(
          sorted[0].race.charAt(0).toUpperCase() + sorted[0].race.slice(1)
        );
        setPercentRace(Math.round(sorted[0].percentage * 100));
      }
    } else {
      setSortedRace([]);
      setCorrectRace(null);
      setPercentRace(null);
    }
    console.log(demoData);
  }, [demoData]);

  useEffect(() => {
    if (demoData && demoData.age) {
      const ageArray = Object.entries(demoData.age).map(
        ([age, percentage]) => ({
          age,
          percentage,
        })
      );
      const sorted = [...ageArray].sort((a, b) => {
        return b.percentage - a.percentage;
      });
      setSortedAge(sorted);
      if (sorted.length > 0) {
        setCorrectAge(
          sorted[0].age.charAt(0).toUpperCase() + sorted[0].age.slice(1)
        );
        setPercentAge(Math.round(sorted[0].percentage * 100));
      }
    } else {
      setSortedAge([]);
      setCorrectAge(null);
      setPercentAge(null);
    }
  }, [demoData]);

  useEffect(() => {
    if (demoData && demoData.gender) {
      const genderArray = Object.entries(demoData.gender).map(
        ([gender, percentage]) => ({
          gender,
          percentage,
        })
      );
      const sorted = [...genderArray].sort((a, b) => {
        return b.percentage - a.percentage;
      });
      setSortedGender(sorted);
      if (sorted.length > 0) {
        setCorrectGender(
          sorted[0].gender.charAt(0).toUpperCase() + sorted[0].gender.slice(1)
        );
        setPercentGender(Math.round(sorted[0].percentage * 100));
      }
    } else {
      setSortedGender([]);
      setCorrectGender(null);
      setPercentGender(null);
    }
  }, [demoData]);

  useEffect(() => {
    if (selectedDemo === "race") {
      setDisplayedPercent(percentRace);
    } else if (selectedDemo === "age") {
      setDisplayedPercent(percentAge);
    } else if (selectedDemo === "sex") {
      setDisplayedPercent(percentGender);
    }
  }, [percentRace, percentAge, percentGender, selectedDemo]);

  if (!demoData || Object.keys(demoData).length === 0) {
    return (
      <>
        <Nav />
        <div className="demo">
          <div className="demo__wrapper">
            <div className="demo__title">
              <div className="demo__title--heading">A.I. ANALYSIS</div>
              <div className="demo__title--title">DEMOGRAPHICS</div>
              <div className="demo__title--description">
                PREDICTED RACE & AGE
              </div>
            </div>
            <div className="demo__results">
              <p>
                Loading demographics data or no data available. Please perform
                an analysis first.
              </p>
              <div className="demo__btns">
                <Link to="/results">
                  <div className="back__btn--small">
                    <p>BACK</p>
                  </div>
                  <div className="back__btn">
                    <div className="back__btn--border"></div>
                    <div className="back__btn--triangle">▶{"\uFE0E"}</div>
                    <div className="back__btn--title">BACK</div>
                  </div>
                </Link>
                <Link to="/" className="home__btn">
                  <div className="proceed__btn--title">HOME</div>
                  <div className="proceed__btn--border"></div>
                  <div className="proceed__btn--triangle">▶{"\uFE0E"}</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Nav />
      <div className="demo">
        <div className="demo__wrapper">
          <div className="demo__title">
            <div className="demo__title--heading">A.I. ANALYSIS</div>
            <div className="demo__title--title">DEMOGRAPHICS</div>
            <div className="demo__title--description">PREDICTED RACE & AGE</div>
          </div>
          <div className="demo__results">
            <div className="demo__correct--details">
              <button
                className="demo__correct--detail"
                onClick={() => {
                  setSelectedDemo("race");
                  setDisplayedPercent(percentRace);
                }}
                style={{
                  backgroundColor:
                    selectedDemo === "race" ? "#1a1b1c" : "#f3f3f4",
                }}
              >
                <div
                  className="demo__set--detail"
                  style={{
                    color: selectedDemo === "race" ? "#fff" : "#1a1b1c",
                  }}
                >
                  {correctRace}
                </div>
                <div
                  className="demo__detail--title"
                  style={{
                    color: selectedDemo === "race" ? "#fff" : "#1a1b1c",
                  }}
                >
                  RACE
                </div>
              </button>
              <button
                className="demo__correct--detail"
                onClick={() => {
                  setSelectedDemo("age");
                  setDisplayedPercent(percentAge);
                }}
                style={{
                  backgroundColor:
                    selectedDemo === "age" ? "#1a1b1c" : "#f3f3f4",
                }}
              >
                <div
                  className="demo__set--detail"
                  style={{
                    color: selectedDemo === "age" ? "#fff" : "#1a1b1c",
                  }}
                >
                  {correctAge}
                </div>{" "}
                <div
                  className="demo__detail--title"
                  style={{
                    color: selectedDemo === "age" ? "#fff" : "#1a1b1c",
                  }}
                >
                  AGE
                </div>
              </button>
              <button
                className="demo__correct--detail"
                onClick={() => {
                  setSelectedDemo("sex");
                  setDisplayedPercent(percentGender);
                }}
                style={{
                  backgroundColor:
                    selectedDemo === "sex" ? "#1a1b1c" : "#f3f3f4",
                }}
              >
                <div
                  className="demo__set--detail"
                  style={{
                    color: selectedDemo === "sex" ? "#fff" : "#1a1b1c",
                  }}
                >
                  {correctGender}
                </div>
                <div
                  className="demo__detail--title"
                  style={{
                    color: selectedDemo === "sex" ? "#fff" : "#1a1b1c",
                  }}
                >
                  SEX
                </div>
              </button>
            </div>

            <div className="demo__displayed">
              <div className="demo__displayed--title">
                {selectedDemo === "race" && correctRace}
                {selectedDemo === "age" && correctAge}
                {selectedDemo === "sex" && correctGender}
              </div>
              <div className="demo__displayed--percent-wrapper">
                <div className="demo__displayed--percent">
                  <CircularProgressbar
                    value={displayedPercent}
                    text={`${displayedPercent}%`}
                    strokeWidth={2}
                    styles={buildStyles({
                      strokeLinecap: "butt",
                      textSize: "10px",
                      transition: "transform 2s ease-in-out",
                      pathColor: "#1a1b1c",
                      textColor: "#1a1b1c",
                    })}
                  />
                </div>
              </div>
              <div className="demo__estimate--wrong">
                If A.I. estimate is wrong, select the correct one.
              </div>
            </div>
            <div className="demo__confidence">
              <div className="demo__confidence--title">
                <div className="demo__confidence--title-demo">
                  {selectedDemo === "race" && "RACE"}
                  {selectedDemo === "age" && "AGE"}
                  {selectedDemo === "sex" && "GENDER"}
                </div>
                <div className="demo__confidence--title-confidence">
                  A.I. CONFIDENCE
                </div>
              </div>
              {selectedDemo === "race" && sortedRace.length > 0 && (
                <div className="demo__confidence--options">
                  {sortedRace.map((race) => {
                    const capitalizedRaceName =
                      race.race.charAt(0).toUpperCase() + race.race.slice(1);
                    return (
                      <button
                        className="demo__confidence--option"
                        key={race.race + race.percentage}
                        onClick={() => {
                          setCorrectRace(capitalizedRaceName);
                          setPercentRace(Math.round(race.percentage * 100));
                        }}
                        style={{
                          backgroundColor:
                            correctRace === capitalizedRaceName
                              ? "#1a1b1c"
                              : "#f3f3f4",
                        }}
                      >
                        <div className="demo__confidence--option-left">
                          {correctRace === capitalizedRaceName ? (
                            <img
                              src={radio_button}
                              alt="Selected Radio Button"
                            />
                          ) : (
                            <img
                              src={radio_button_black}
                              alt="Unselected Radio Button"
                            />
                          )}
                          <div
                            className="demo__confidence--option-title"
                            style={{
                              color:
                                correctRace === capitalizedRaceName
                                  ? "#fff"
                                  : "#1a1b1c",
                            }}
                          >
                            {capitalizedRaceName}
                          </div>
                        </div>
                        <div
                          className="demo__confidence--option-right"
                          style={{
                            color:
                              correctRace === capitalizedRaceName
                                ? "#fff"
                                : "#1a1b1c",
                          }}
                        >
                          {Math.round(race.percentage * 100)}%
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              {selectedDemo === "age" && sortedAge.length > 0 && (
                <div className="demo__confidence--options">
                  {sortedAge.map((age) => {
                    const capitalizedAgeName =
                      age.age.charAt(0).toUpperCase() + age.age.slice(1);
                    return (
                      <button
                        className="demo__confidence--option"
                        key={age.age + age.percentage}
                        onClick={() => {
                          setCorrectAge(capitalizedAgeName);
                          setPercentAge(Math.round(age.percentage * 100));
                        }}
                        style={{
                          backgroundColor:
                            correctAge === capitalizedAgeName
                              ? "#1a1b1c"
                              : "#f3f3f4",
                        }}
                      >
                        <div className="demo__confidence--option-left">
                          {correctAge === capitalizedAgeName ? (
                            <img
                              src={radio_button}
                              alt="Selected Radio Button"
                            />
                          ) : (
                            <img
                              src={radio_button_black}
                              alt="Unselected Radio Button"
                            />
                          )}
                          <div
                            className="demo__confidence--option-title"
                            style={{
                              color:
                                correctAge === capitalizedAgeName
                                  ? "#fff"
                                  : "#1a1b1c",
                            }}
                          >
                            {capitalizedAgeName}
                          </div>
                        </div>
                        <div
                          className="demo__confidence--option-right"
                          style={{
                            color:
                              correctAge === capitalizedAgeName
                                ? "#fff"
                                : "#1a1b1c",
                          }}
                        >
                          {Math.round(age.percentage * 100)}%
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
              {selectedDemo === "sex" && sortedGender.length > 0 && (
                <div className="demo__confidence--options">
                  {sortedGender.map((gender) => {
                    const capitalizedGenderName =
                      gender.gender.charAt(0).toUpperCase() +
                      gender.gender.slice(1);
                    return (
                      <button
                        className="demo__confidence--option"
                        key={gender.gender + gender.percentage}
                        onClick={() => {
                          setCorrectGender(capitalizedGenderName);
                          setPercentGender(Math.round(gender.percentage * 100));
                        }}
                        style={{
                          backgroundColor:
                            correctGender === capitalizedGenderName
                              ? "#1a1b1c"
                              : "#f3f3f4",
                        }}
                      >
                        <div className="demo__confidence--option-left">
                          {correctGender === capitalizedGenderName ? (
                            <img
                              src={radio_button}
                              alt="Selected Radio Button"
                            />
                          ) : (
                            <img
                              src={radio_button_black}
                              alt="Unselected Radio Button"
                            />
                          )}
                          <div
                            className="demo__confidence--option-title"
                            style={{
                              color:
                                correctGender === capitalizedGenderName
                                  ? "#fff"
                                  : "#1a1b1c",
                            }}
                          >
                            {capitalizedGenderName}
                          </div>
                        </div>
                        <div
                          className="demo__confidence--option-right"
                          style={{
                            color:
                              correctGender === capitalizedGenderName
                                ? "#fff"
                                : "#1a1b1c",
                          }}
                        >
                          {Math.round(gender.percentage * 100)}%
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="demo__btns">
            <a href="/results">
              <div className="back__btn--small">
                <p>BACK</p>
              </div>
              <div className="back__btn">
                <div className="back__btn--border"></div>
                <div className="back__btn--triangle">▶{"\uFE0E"}</div>
                <div className="back__btn--title">BACK</div>
              </div>
            </a>
            <div className="demo__btn2">
            <button className="reset__btn">RESET</button>
            <button className="confirm__btn">CONFIRM</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demographics;
