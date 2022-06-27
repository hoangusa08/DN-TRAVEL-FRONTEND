import React, { useEffect, useState } from "react";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./RateTour.scss";
import ReactStars from "react-rating-stars-component";
import useFetchTourDetail from "../../../hook/useFetchTourDetail";
import { Button } from "react-bootstrap";
import { getUser } from "../../../core/localStore";
import http from "../../../core/services/httpService";
import { pushToast } from "../../../components/Toast";
import useFetchRateTour from "../../../hook/useFetchRateTour";

export default function RateTour() {
  const id = window.location.href.split("/");
  const [cmt, setCmt] = useState({
    star: 0,
    comment: "",
  });
  const user = getUser();
  const [data, getTourDetail] = useFetchTourDetail();
  const [rate, getRateTour] = useFetchRateTour();
  const [star, setstar] = useState(3);
  const ratingChanged = (newRating) => {
    setCmt({ ...cmt, star: newRating });
  };

  useEffect(() => {
    getRateTour(id[id.length - 1], user?.id);
    getTourDetail(id[id.length - 1]);
  }, []);

  const handleSubmit = () => {
    http
      .post(`/customer/rate-tour`, {
        customerId: user.id,
        star: cmt.star,
        comment: cmt.comment,
        tourId: id[id.length - 1],
      })
      .then((res) => {
        pushToast("success", res.message);
      })
      .catch((e) => {
        pushToast("error", e?.message);
      });
  };

  useEffect(() => {
    setstar(rate?.star);
   console.log(rate);
  }, [rate])
  
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <div className="rate-tour-ctn">
          <div className="header-rate">
            <div className="title">Tour:</div>
            <div>{"  " + data?.name.toUpperCase()}</div>
          </div>
          <div className="star-rate">
            <div className="title">Số sao:</div>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              value={star}
            />
          </div>

          <div className="cmt-ctn">
            <div className="title">Đánh giá</div>
            <div className="cmt">
              <textarea
                value={cmt?.comment}
                onChange={(e) => setCmt({ ...cmt, comment: e.target.value })}
              />
            </div>
          </div>

          <Button onClick={() => handleSubmit()}>Lưu</Button>
        </div>
      </div>
    </div>
  );
}
