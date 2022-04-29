import React from "react";
import MainLayout from "../../layout/MainLayout";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import StarRatings from "react-star-ratings";
import "./tourDetail.scss";

export default function TourDetail() {
  return (
    <MainLayout>
      <div className="tourDetail">
        <div className="tourDetail-top">
          <h1>
            Tour Liên Tuyến 4N4D: Măng Đen - Kom Tum - Quy Nhơn - Eo Gió - Kỳ Co{" "}
          </h1>
          <div className="tour-rate">
            <StarRatings
              starRatedColor="#f79321"
              numberOfStars={5}
              rating={3.5}
              starDimension="20px"
            />
            <div className="evaluate"><i>{3.5}</i>| 1 luot danh gia</div>
          </div>
        </div>

        <div className="tourDetail-bottom">
          <Menu></Menu>
          <Payment />
        </div>
      </div>
    </MainLayout>
  );
}
