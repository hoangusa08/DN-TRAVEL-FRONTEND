import React from "react";
import "./Slide.scss";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function Slide() {
  return (
    <div  className="slide-bar">
      <AwesomeSlider >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider>
    </div>
  );
}
