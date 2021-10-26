import React from "react";
import CardTour from "../CardTour/CardTour";
import "./SuggestionsHome.scss";

export default function SuggestionsHome() {
  return (
    <div className="suggestions-home">
      <div className="title"> TOUR DA NANG</div>
      <div className="content">
        Tour ghép hàng ngày khởi hành từ TP Đà Nẵng giá rẻ
      </div>
      <div className="row list-card">
        {Array.from({ length: 5 }).map((index) => (
          <div className="col">
            <CardTour />
          </div>
        ))}
      </div>
      <div className="ctn-seemore">
        <button className="see-more">xem nhieu hon</button>
      </div>
    </div>
  );
}
