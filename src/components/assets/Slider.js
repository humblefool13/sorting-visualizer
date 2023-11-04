import React from "react";

const Slider = ({ speed, onChange, disabled }) => {
  if (speed)
    return (
      <div className="wrapper">
        <form>
          <div className="slider-title">Select Speed</div>
          <div className="speed-slider" onChange={onChange}>
            <input
              type="radio"
              name="speed"
              id="slow"
              value={200}
              disabled={disabled}
            />
            <label htmlFor="slow" current-speed="Slow"></label>
            <input
              type="radio"
              name="speed"
              id="medium"
              value={150}
              defaultChecked
              disabled={disabled}
            />
            <label htmlFor="medium" current-speed="Medium"></label>
            <input
              type="radio"
              name="speed"
              id="fast"
              value={100}
              disabled={disabled}
            />
            <label htmlFor="fast" current-speed="Fast"></label>
            <div className="slider-position"></div>
          </div>
        </form>
      </div>
    );
  if (!speed)
    return (
      <div className="wrapper">
        <form>
          <div className="slider-title">Select Size</div>
          <div className="speed-slider" onChange={onChange}>
            <input
              type="radio"
              name="size"
              id="small"
              value={25}
              disabled={disabled}
            />
            <label htmlFor="small" current-speed="Small"></label>
            <input
              type="radio"
              name="size"
              id="medium-size"
              value={50}
              defaultChecked
              disabled={disabled}
            />
            <label htmlFor="medium-size" current-speed="Medium"></label>
            <input
              type="radio"
              name="size"
              id="large"
              value={75}
              disabled={disabled}
            />
            <label htmlFor="large" current-speed="Large"></label>
            <div className="slider-position"></div>
          </div>
        </form>
      </div>
    );
};

export default Slider;
