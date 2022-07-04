import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "./CardTourDetail.scss";

export default function CardTourDetail({ tour }) {
  const history = useHistory();
  const goToTorDetail = (id) => {
    history.push(`/TourDetail/${id}`);
  };
  return (
    <div className="card-tour-detail row" onClick={() => goToTorDetail(tour?.id)}>
      <div className="ctn-img col-4 ">
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
          <h6 className="mota" style={{color: "#f79321", fontSize:"18px"}}>/{tour.star}</h6>
        </div>
        <div>
          <span style={{color: "#00b4ff"}}>{tour.name.toUpperCase()}</span>
        </div>
        <div style={{paddingLeft: "10px"}}>
          <span>
           {tour.subDescription}
          </span>
        </div>
      </div>
      <div className="ctn-price col-2">
        <div style={{marginTop:"30px", fontSize: "18px", fontWeight: 500}}>
          <span>Giá: {tour.adultPrice}</span>
        </div>
        <div >
          <Button className="chitiet">Chi tiết</Button>
        </div>
      </div>
    </div>
  );
}
