import React from "react";
import { useHistory } from "react-router-dom";
import StarRating from "react-star-ratings";
import "./CardTour.scss";

const image =
  "https://vietnam.travel/sites/default/files/styles/top_banner/public/2019-09/nature.jpg?itok=wWtFQZ9M";

export default function CardTour() {
  const history = useHistory();
  const goToTorDetail = () => {
    history.push("/TourDetail");
  };
  return (
    <div className="card" onClick={() => goToTorDetail()}>
      <img className="card-img-top" src={image} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">TOUR XE JEEP SƠN TRÀ</h5>
        <p className="card-text">Tour Ghep</p>
        <p>500000 VND</p>
        <StarRating
          starRatedColor="#f79321"
          numberOfStars={5}
          rating={3.5}
          starDimension="15px"
        />
        {3.5}
      </div>
    </div>
  );
}
