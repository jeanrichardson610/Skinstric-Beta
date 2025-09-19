import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from "./Pages/Intro";
import Analysis from "./Pages/Analysis";
import Results from "./Pages/Results";
import Demographics from "./Pages/Demographics";
import Camera from "./Pages/Camera";
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

  const convertFileToBase64 = useCallback((file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }, []);

  // Helper to add a minimum delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const uploadImage = useCallback(async () => {
    if (!preview) return;

    setLoading(true);
    try {
      const base64Data = preview.split(",")[1];

      // Run API request and delay simultaneously
      const [response] = await Promise.all([
        axios.post(
          "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
          { image: base64Data },
          { headers: { "Content-Type": "application/json" } }
        ),
        delay(2000), // Minimum 2 seconds loading
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

  return (
    <div className="App">
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
