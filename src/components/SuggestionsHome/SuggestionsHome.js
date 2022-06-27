import React from "react";
import { useHistory } from "react-router-dom";
import CardTour from "../CardTour/CardTour";
import "./SuggestionsHome.scss";

export default function SuggestionsHome({ ...props }) {
  const history = useHistory();

  const goToListTour = () => {
    history.push("/Tour");
  };
  return (
    <div className="suggestions-home">
      <div className="title">TOUR KHỞI HÀNH TỪ {props?.start?.name?.toUpperCase()}</div>
      <div className="content">
        Tour hàng ngày khởi hành từ {props?.start?.name?.toUpperCase()} giá rẻ
      </div>
      <div className="row list-card">
        {props?.tours?.map((tour, index) => (
          <div
            className="col-12 col-sm-6 col-xl-3 col-lg-3 col-md-4"
            key={index}
          >
            <CardTour tour={tour}/>
          </div>
        ))}
      </div>
      <div className="ctn-seemore">
        <button
          className="see-more"
          onClick={() => {
            goToListTour();
          }}
        >
          xem nhieu hon
        </button>
      </div>
    </div>
  );
}
