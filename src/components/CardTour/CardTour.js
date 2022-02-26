import React from "react";
import StarRating from "react-star-ratings";

export default function CardTour() {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img
          class="card-img-top"
          src="https://webdulichdanang.com/wp-content/uploads/2020/02/xe_jeep-da_nang_01-400x267.jpg"
          alt="Card image cap"
        ></img>
        <div class="card-body">
          <h5 class="card-title">TOUR XE JEEP SƠN TRÀ</h5>
          <p class="card-text">Tour Ghep</p>
          <p>500000 VND</p>
          <StarRating
            starRatedColor="yellow"
            numberOfStars={5}
            rating={3.5}
            starDimension="20px"
          />
          {3.5}
        </div>
      </div>
    </div>
  );
}
