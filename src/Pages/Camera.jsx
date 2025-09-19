import React, { useEffect, useRef, useState } from "react";
import "./Camera.css";
import Nav from "../Components/Nav";
import Webcam from "react-webcam";
import camera_icon from "../Assets/Group 40037.png";

function Camera({ setPreview, preview, uploadImage }) {
  const webcamRef = useRef(null);
  const [previewImg, setPreviewImg] = useState("");
  const [previewImgDisplay, setPreviewImgDisplay] = useState(false);
  const [displayElem, setDisplayElem] = useState("");
  const [displayChoice, setDisplayChoice] = useState("none");

  const capture = ( ) => {
    if (webcamRef.current) {
      const imgSrc = webcamRef.current.getScreenshot();
      setPreviewImg(imgSrc);
    }
  };

   useEffect(() => {
      if (!preview) return;
  
      uploadImage();
    }, [preview, uploadImage]);

  return (
    <>
      <Nav />
      <div className="camera__wrapper">
        {previewImgDisplay ? (
          <img src={previewImg} alt="" className="capture__preview" />
        ) : (
          <Webcam audio={false} ref={webcamRef} />
        )}
        <div className="capture" style={{ display: displayElem }}>
          <p>TAKE PICTURE</p>
          <button
            className="camera__btn"
            onClick={() => {
              capture();
              setDisplayElem("none");
              setDisplayChoice("block");
              setPreviewImgDisplay(true);
            }}
          >
            <img src={camera_icon} alt="" />
          </button>
        </div>
        <div className="picture__recs" style={{ display: displayElem }}>
          <div className="picture__recs--title">
            TO GET BETTER RESULTS MAKE SURE TO HAVE
          </div>
          <div className="picture__recs--wrapper">
            <div className="picture__rec">◇ NEUTRAL EXPRESSION</div>
            <div className="picture__rec">◇ FRONTAL POSE</div>
            <div className="picture__rec">◇ ADEQUATE LIGHTING</div>
          </div>
        </div>
        <div className="choice__wrapper" style={{ display: displayChoice }}>
          <h2>Preview</h2>
          <div className="choice__btns">
            <button
              className="retake"
              onClick={() => {
                setDisplayElem("");
                setDisplayChoice("none");
                setPreviewImg("");
                setPreviewImgDisplay(false);
              }}
            >
              Retake
            </button>
            <button
              className="use"
              onClick={() => {
                setPreview(previewImg);
              }}
            >
              Use This Photo
            </button>
          </div>
        </div>
        <div className="capture__btns">
          <a href="/analysis">
            <div className="capture__back--btn">
              <div className="capture__back--btn-border"></div>
              <div className="capture__back--btn-triangle">▶{"\uFE0E"}</div>
              <div className="capture__back--btn-title">BACK</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default Camera;
