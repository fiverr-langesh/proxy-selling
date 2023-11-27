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

  return (
    <div
      className="custom-slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="slider-track" style={{ width: `${sliderValue}%` }}></div>
      <div
        className="slider-highlight"
        style={{ width: `${sliderValue}%` }}
      ></div>
      <div
        className="slider-thumb"
        style={{ left: `calc(${sliderValue}% - 25px)` }}
      >
        {Math.round(sliderValue)}
      </div>
      <div
        className="slider-background"
        style={{ left: `${sliderValue}%` }}
      ></div>
    </div>
  );
};

export default CustomSlider;
