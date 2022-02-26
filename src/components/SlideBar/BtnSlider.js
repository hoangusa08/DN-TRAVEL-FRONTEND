import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Slider.scss";

export default function BtnSlider({ ...props }) {
  const { moveSlide, direction } = props;
  const classHtml = "btn-slide"+ " "+ direction;
  return (
    <button onClick={moveSlide} className={classHtml}>
      <FontAwesomeIcon icon={direction === "next" ? faAngleRight : faAngleLeft} />
    </button>
  );
}
