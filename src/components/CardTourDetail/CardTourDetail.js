import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./CardTourDetail.scss";

export default function CardTourDetail({ tour }) {
  const history = useHistory();
  console.log("tour", tour);

  const goToTorDetail = () => {
    history.push("/TourDetail");
  };
  return (
    <div className="card-tour-detail row" onClick={() => goToTorDetail()}>
      <div className="ctn-img col-3 ">
        <img src={tour.tourImage} alt="tourImage"></img>
      </div>
      <div className="ctn-detail col">
        <div className="star-ctn">
          <StarRatings
            starRatedColor="#f79321"
            numberOfStars={5}
            rating={tour.star}
            starDimension="20px"
          />
          <h6 className="mota">/{tour.star}</h6>
        </div>
        <div>
          <span>{tour.name}</span>
        </div>
        <div>
          <span>
           {tour.description}
          </span>
        </div>
      </div>
      <div className="ctn-price col-3">
        <div>
          <span>{tour.adultPrice}</span>
        </div>
        <div>
          <Button className="chitiet">chi tiet</Button>
        </div>
      </div>
    </div>
  );
}
