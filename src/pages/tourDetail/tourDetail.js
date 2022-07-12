import React, { useEffect } from "react";
import MainLayout from "../../layout/MainLayout";
import Menu from "./components/Menu";
import Payment from "./components/Payment";
import StarRatings from "react-star-ratings";
import "./tourDetail.scss";
import useFetchTourDetail from "../../hook/useFetchTourDetail";

export default function TourDetail() {
  const [data, getTourDetail] = useFetchTourDetail();
  const url = window.location.href.split("/");

  useEffect(() => {
    getTourDetail(url[url.length - 1]);
  }, []);

  return (
    <MainLayout>
      <div className="tourDetail">
        <div className="tourDetail-top">
          <h1>{data?.name.toUpperCase()}</h1>
          <div className="tour-rate">
            <StarRatings
              starRatedColor="#f79321"
              numberOfStars={5}
              rating={data?.totalStar}
              starDimension="20px"
            />
            <div className="evaluate">
              <i>{data?.totalStar}</i>| {data?.rateTours?.length} Lượt đánh giá
            </div>
          </div>
          <div className="company">
            Đơn vị tổ chức: <strong>{data?.company.toUpperCase()}</strong>
          </div>
          <div className="company">
            Thể loại: <strong> {data?.category.name.toUpperCase()}</strong>
          </div>
        </div>

        <div className="tourDetail-bottom">
          <Menu data={data}></Menu>
          <Payment data={data} />
        </div>
      </div>
    </MainLayout>
  );
}
