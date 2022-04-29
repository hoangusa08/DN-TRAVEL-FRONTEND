import React from "react";
import { useHistory } from "react-router-dom";
import CardTour from "../CardTour/CardTour";
import "./SuggestionsHome.scss";

export default function SuggestionsHome() {
  const history = useHistory();

  const goToListTour = () => {
    history.push("/Tour");
  };
  return (
    <div className="suggestions-home" >
      <div className="title"> TOUR DA NANG</div>
      <div className="content">
        Tour ghép hàng ngày khởi hành từ TP Đà Nẵng giá rẻ
      </div>
      <div className="row list-card">
        {Array.from({ length: 6 }).map((index) => (
          <div
            className="col-12 col-sm-6 col-xl-2 col-lg-3 col-md-4"
            key={index}
          >
            <CardTour />
          </div>
        ))}
      </div>
      <div className="ctn-seemore">
        <button className="see-more" onClick={()=>{goToListTour()}}>xem nhieu hon</button>
      </div>
    </div>
  );
}
