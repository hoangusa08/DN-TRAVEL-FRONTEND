import React, { useState } from "react";
import "./Slider.scss";
import BtnSlider from "./BtnSlider";
import DataSlider from "./DataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {

  }

  const prevSlide = () => {

  }
 
  return (
    <div className="container-slider">
      {DataSlider.map((obj, i) => {
        return (
          <div className="slide" key={i}>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
