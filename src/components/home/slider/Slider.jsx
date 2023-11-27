// CustomSlider.js

import React, { useState, useRef } from "react";
import "./CustomSlider.css";

const CustomSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef();

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const offsetX = event.clientX - sliderRect.left;
      const percent = (offsetX / sliderRect.width) * 100;

      // Ensure the value stays within the valid range (0 to 100)
      const newValue = Math.min(100, Math.max(0, percent));
      setSliderValue(newValue);
    }
  };

  const handleClick = (event) => {
    const sliderRect = sliderRef.current.getBoundingClientRect();
    const offsetX = event.clientX - sliderRect.left;
    const percent = (offsetX / sliderRect.width) * 100;

    // Ensure the value stays within the valid range (0 to 100)
    const newValue = Math.min(100, Math.max(0, percent));
    setSliderValue(newValue);
  };

  return (
    <div
      className="custom-slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <div className="slider-circle start"></div>
      <div className="slider-track" style={{ width: `${sliderValue}%` }}></div>
      <div
        className="slider-highlight"
        style={{ width: `${sliderValue}%` }}
      ></div>
      <div
        onmousedown={() => false}
        className="slider-thumb"
        style={{ left: `calc(${sliderValue}%)` }}
      >
        {Math.round(sliderValue)}
      </div>
      <div className="slider-background"></div>
      <div className="slider-circle end"></div>
      <div className="scale">
        {[...Array(20).keys()].map((index) => (
          <div
            key={index}
            className={`scale-line ${
              index / 20 <= sliderValue / 100 ? "highlighted" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
