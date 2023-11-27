import React, { useState } from 'react'

export default function Slider() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="custom-slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={handleSliderChange}
        className="custom-slider"
      />
      <p>Value: {sliderValue}</p>
    </div>
  );
}
