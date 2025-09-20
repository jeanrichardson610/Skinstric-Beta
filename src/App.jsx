import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Pages/Intro";
import Analysis from "./Pages/Analysis";
import Results from "./Pages/Results";
import Demographics from "./Pages/Demographics";
import Camera from "./Pages/Camera";
import Nav from "./Components/Nav";
import Nav2 from "./Components/Nav2";
import { useState, useCallback } from "react";
import axios from "axios";

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

function App() {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [demoData, setDemoData] = useState(() => {
    const savedDemoData = localStorage.getItem("demoData");
    return savedDemoData ? JSON.parse(savedDemoData) : {};
  });

  const navigate = useNavigate();
  const location = useLocation(); // <-- get current path

  const convertFileToBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }, []);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const uploadImage = useCallback(async () => {
    if (!preview) return;

    setLoading(true);
    try {
      const base64Data = preview.split(",")[1];

      const [response] = await Promise.all([
        axios.post(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          { image: base64Data },
          { headers: { "Content-Type": "application/json" } }
        ),
        delay(2000),
      ]);

      setDemoData(response.data.data);
      localStorage.setItem("demoData", JSON.stringify(response.data.data));
      window.alert("Image analyzed successfully!");
      navigate("/results");
    } catch (error) {
      console.error(error);
      setDemoData({});
      localStorage.removeItem("demoData");
      window.alert("Error analyzing image. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [preview, navigate]);

  // Decide which Nav to show based on route
  const renderNav = () => {
    if (location.pathname === "/" || location.pathname === "/intro") {
      return <Nav />;
    } else {
      return <Nav2 />;
    }
  };

  return (
    <div className="App">
      {renderNav()} {/* Nav or Nav2 rendered dynamically */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/intro" element={<Intro />} />
        <Route
          path="/analysis"
          element={
            <Analysis
              convertFileToBase64={convertFileToBase64}
              setPreview={setPreview}
              preview={preview}
              loading={loading}
              uploadImage={uploadImage}
            />
          }
        />
        <Route path="/results" element={<Results />} />
        <Route
          path="/demographics"
          element={<Demographics demoData={demoData} />}
        />
        <Route
          path="/camera"
          element={
            <Camera
              setPreview={setPreview}
              preview={preview}
              uploadImage={uploadImage}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
