import React, { useEffect, useState } from "react";
import "./IntroForm.css";
import Big_Square from "../Assets/Rectangle 2780.png";
import Medium_Square from "../Assets/Rectangle 2779.png";
import Small_Square from "../Assets/Rectangle 2778.png";

function IntroForm() {
  const [userName, setUserName] = useState("");
  const [location, setLocation] = useState("");
  const [formState, setFormState] = useState("name");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("name", userName);
    localStorage.setItem("location", location);
  }, [userName, location]);

  const validateInput = (value) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value);
  };

  const handleNameInput = (event) => {
    if (event.key === "Enter") {
      const nameValue = event.target.value.trim();
      if (nameValue === "") {
        setError(true);
        setErrorMessage("Name cannot be empty");
        setUserName("");
      } else if (!validateInput(nameValue)) {
        setError(true);
        setErrorMessage(
          "Please enter a valid name without numbers or special characters"
        );
        setUserName("");
      } else {
        setError(false);
        setErrorMessage("");
        setUserName(nameValue);
        setFormState("location");
      }
    }
  };

  const handleLocationInput = (event) => {
    if (event.key === "Enter") {
      const locationValue = event.target.value.trim();
      if (locationValue === "") {
        setError(true);
        setErrorMessage("Location cannot be empty");
        setLocation("");
      } else if (!validateInput(locationValue)) {
        setError(true);
        setErrorMessage(
          "Please enter a valid city name without numbers or special characters"
        );
        setLocation("");
      } else {
        setError(false);
        setErrorMessage("");
        setLocation(locationValue);
        loadingState();
      }
    }
  };

  const loadingState = () => {
    setFormState("loading");
    setTimeout(() => {
      setFormState("proceed");
    }, 4000);
  };

  return (
    <div className="intro__main">
      <div className="intro__heading">
        <p>TO START ANALYSIS</p>
      </div>
      <div className="intro__forms">
        {formState === "location" && (
          <>
            <p>CLICK TO TYPE</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              {error && (
                <div className="error__wrapper">
                  <p>{errorMessage}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                placeholder="your city name"
                onKeyUp={handleLocationInput}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <button type="submit" style={{ display: "none" }}>
                Submit
              </button>{" "}
            </form>
          </>
        )}
        {formState === "name" && (
          <>
            <p>CLICK TO TYPE</p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              {error && (
                <div className="error__wrapper">
                  <p>{errorMessage}</p>
                </div>
              )}
              <input
                type="text"
                autoComplete="off"
                placeholder="Introduce Yourself"
                onKeyUp={handleNameInput}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <button type="submit" style={{ display: "none" }}>
                Submit
              </button>{" "}
            </form>
          </>
        )}
        {formState === "loading" && (
          <>
            <div className="loading__state">
              <div className="loading__state--title">Submission processing</div>
              <div className="dots">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
              </div>
            </div>
          </>
        )}
        {formState === "proceed" && (
          <>
            <div className="proceed__wrapper">
              <div className="proceed__title">Thank you!</div>
              <div className="proceed__direction">Proceed to the next step</div>
            </div>
          </>
        )}
        <img src={Big_Square} alt="" className="big__square" />
        <img src={Medium_Square} alt="" className="medium__square" />
        <img src={Small_Square} alt="" className="small__square" />
      </div>
      <div className="intro__btns">
        <a href="/">
          <div className="back__btn">
            <div className="back__btn--border"></div>
            <div className="back__btn--triangle">▶{"\uFE0E"}</div>
            <div className="back__btn--title">BACK</div>
          </div>
        </a>
        {formState === "proceed" && (
          <a href="/analysis" className="proceed__btn">
            <div className="proceed__btn--title">PROCEED</div>
            <div className="proceed__btn--border"></div>
            <div className="proceed__btn--triangle">▶{"\uFE0E"}</div>
          </a>
        )}
      </div>
    </div>
  );
}

export default IntroForm;
