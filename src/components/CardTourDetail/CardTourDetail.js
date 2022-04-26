import React from "react";
import StarRatings from "react-star-ratings";
import "./CardTourDetail.scss";

export default function CardTourDetail() {
  return (
    <div className="card-tour-detail row">
      <div className="ctn-img col-3 ">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"></img>
      </div>
      <div className="ctn-detail col">
        <div>
          <StarRatings
            starRatedColor="#f79321"
            numberOfStars={5}
            rating={3.5}
            starDimension="20px"
          />
          {3.5}
        </div>
        <div>
          <span>TOUR DU LỊCH TRƯỢT THÁC HÒA PHÚ THÀNH 1 NGÀY</span>
        </div>
        <div>
          <span>Tour du lịch Trượt thác Hòa Phú Thành 1 ngày Trượt thác Hòa Phú Thành – dành cho những bạn trẻ tuổi đam</span>
        </div>
      </div>
      <div className="ctn-price col-3">
        <div>
          <span>650000</span>
        </div>
        <div>
          <button>chi tiet</button>
        </div>
      </div>
    </div>
  );
}
