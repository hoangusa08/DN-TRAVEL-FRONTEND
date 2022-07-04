import React, { useEffect, useState } from "react";
import "./Slider.scss";
import BtnSlider from "./BtnSlider";
import DataSlider from "./DataSlider";
import dataSlide from "./DataSlider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useGetProvince from "../../hook/useGetProvince";
import { useHistory } from "react-router-dom";
// import http from "../../core/services/httpService";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [provinces] = useGetProvince();
  const [location, setLocation] = useState();
  const history = useHistory();

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

  useEffect(() => {
    if (provinces) {
      setLocation(provinces[0].id);
    }
  }, [provinces]);

  const handleSearch = () => {
    history.push({
      pathname: "Tour",
      state: {
        date: startDate,
        provinceId: location,
      },
    });
  };

  return (
    <div className="container-slider">
      <div className="search-ctn-slide">
        <div>
          <h1>Du lịch theo phong cách riêng</h1>
          <h2>Trải nghiệm trọn vẹn - Giá cả phải chăng.</h2>
        </div>
        <div className="form-search">
          {/* <div className="province-ctn">
            <input className="province" placeholder="Bạn muốn đi đâu"></input>
          </div> */}
          <div className="bottom-ctn">
            <DatePicker
              selected={startDate}
              className="fromInput"
              onChange={(date) => {
                setStartDate(date);
              }}
            />
            <select
              className="fromInput"
              onChange={(event) => setLocation(event.target.value)}
              value={location}
            >
              {provinces?.map((schedule, index) => (
                <option value={schedule.id} key={schedule.id}>
                  {schedule.name}
                </option>
              ))}
            </select>
            {/* <input className="fromInput" placeholder="Khởi hành từ"></input> */}
          </div>
          <div className="province-ctn">
            <button onClick={() => handleSearch()}>Tìm</button>
          </div>
          <div className="search-bottom">
            <span>Tailor tour - Trải nghiệm theo cách riêng của bạn</span>
            {/* <button>Đặt Tour Riêng</button> */}
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
              alt=""
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
