import React from "react";
import StarRatings from "react-star-ratings";
import "./Rated.scss";

export default function Rated({ data }) {
  return (
    <div className="Rated">
      <div className="star-ctn">
        <StarRatings
          starRatedColor="#f79321"
          numberOfStars={5}
          rating={data?.totalStar}
          starDimension="20px"
        />
        <h6 className="mota">/{data?.totalStar}</h6>
        <h6 className="numberReview">| {data?.rateTours?.length} danh gia </h6>
      </div>
      {data?.rateTours?.map((review, index) => (
        <RateItem key={index} review={review}></RateItem>
      ))}
    </div>
  );
}

function RateItem({ review }) {
  return (
    <div className="item">
      <div className="top">
        <h4>{review?.user_full_name}</h4>
        <div>
          <StarRatings
            starRatedColor="#f79321"
            numberOfStars={5}
            rating={review?.star}
            starDimension="20px"
          />
        </div>
      </div>
      <div className="body-rate-item">{review?.comment}</div>
    </div>
  );
}
