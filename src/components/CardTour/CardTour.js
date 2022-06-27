import React from "react";
import { useHistory } from "react-router-dom";
import StarRating from "react-star-ratings";
import "./CardTour.scss";

const image =
  "https://vietnam.travel/sites/default/files/styles/top_banner/public/2019-09/nature.jpg?itok=wWtFQZ9M";

export default function CardTour({ tour }) {
  const history = useHistory();
  const goToTorDetail = () => {
    history.push(`/TourDetail/${tour?.id}`);
  };
  return (
    <div className="card" onClick={() => goToTorDetail()}>
      <img className="card-img-top" src={tour?.tourImage} alt="Card cap"></img>
      <div className="card-body">
        <h5 className="card-title">{tour?.name.toUpperCase()}</h5>
        <p className="card-text">Thể loại: {tour?.category}</p>
        <p>{tour?.adultPrice + " "}VND</p>
        <StarRating
          starRatedColor="#f79321"
          numberOfStars={5}
          rating={tour?.star}
          starDimension="15px"
        />
        {tour?.star}
      </div>
    </div>
  );
}
