import React, { useState } from "react";
import "./Slider.scss";
import BtnSlider from "./BtnSlider";
import DataSlider from "./DataSlider";
import dataSlide from "./DataSlider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [startDate, setStartDate] = useState(new Date());

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlide.length);
    }
  };

  return (
    <div className="container-slider">
      <div className="search-ctn-slide">
        <div>
          <h1>Du lịch theo phong cách riêng</h1>
          <h2>Trải nghiệm trọn vẹn - Giá cả phải chăng.</h2>
        </div>
        <div className="form-search">
          <div className="province-ctn">
            <input className="province" placeholder="ban muon di dau"></input>
          </div>
          <div className="bottom-ctn">
            <DatePicker
              selected={startDate}
              className="fromInput"
              onChange={(date) => {
                console.log(date);
                setStartDate(date);
              }}
            />
            <input className="fromInput" placeholder="khoi hanh tu"></input>
          </div>
          <div className="province-ctn">
            <button >Tim</button>
          </div>
          <div className="search-bottom">
            <span>Tailor tour - Trải nghiệm theo cách riêng của bạn</span>
            <button>Dat Tour</button>
          </div>
        </div>
      </div>
      {DataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img
              src={process.env.PUBLIC_URL + `/image/image${index + 1}.jpg`}
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            key={index}
            onClick={() => setSlideIndex(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
}
