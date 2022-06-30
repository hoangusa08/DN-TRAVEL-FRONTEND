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
import { useHistory } from "react-router-dom";

export default function RateTour() {
  const id = window.location.href.split("/");
  const [cmt, setCmt] = useState({
    star: 0,
    comment: "",
  });
  const user = getUser();
  const [data, getTourDetail] = useFetchTourDetail();
  const [rate, getRateTour] = useFetchRateTour();
  const [isRate, setIsRate] = useState(false);
  const ratingChanged = (newRating) => {
    setCmt({ ...cmt, star: newRating });
  };
  const history = useHistory();
  useEffect(() => {
    getRateTour(id[id.length - 1], user?.id);
    getTourDetail(id[id.length - 1]);
  }, []);

  const handleSubmit = () => {
    if (rate) {
      http
        .put(`/customer/rate-tour/${rate?.id}`, {
          customerId: user.id,
          star: cmt.star,
          comment: cmt.comment,
          tourId: id[id.length - 1],
        })
        .then((res) => {
          pushToast("success", res.message);
          history.push("/tourHistory");
        })
        .catch((e) => {
          pushToast("error", e?.message);
        });
    } else {
      http
        .post(`/customer/rate-tour`, {
          customerId: user.id,
          star: cmt.star,
          comment: cmt.comment,
          tourId: id[id.length - 1],
        })
        .then((res) => {
          pushToast("success", res.message);
          history.push("/tourHistory");
        })
        .catch((e) => {
          pushToast("error", e?.message);
        });
    }
  };

  const handleDelete = () => {
    http
      .delete(`/customer/rate-tour/${rate?.id}`)
      .then((res) => {
        pushToast("success", res.message);
        history.push("/tourHistory");
      })
      .catch((e) => {
        pushToast("error", e?.message);
      });
  };

  useEffect(() => {
    setCmt({
      star: rate?.star,
      comment: rate?.comment,
    });
    console.log(rate);
    if (rate) {
      setIsRate(true);
    }
  }, [rate]);

  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        {!isRate ? (
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
                value={0}
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
        ) : (
          <div className="rate-tour-ctn">
            <div className="header-rate">
              <div className="title">Tour:</div>
              <div>{"  " + data?.name.toUpperCase()}</div>
            </div>
            <div className="star-rate">
              <div className="title">Số sao: {cmt?.star}</div>
            </div>

            <div className="cmt-ctn">
              <div className="title">Đánh giá</div>
              <div className="cmt">
                <textarea
                  disabled
                  value={cmt?.comment}
                  onChange={(e) => setCmt({ ...cmt, comment: e.target.value })}
                />
              </div>
            </div>
            <Button onClick={() => setIsRate(false)}>Chỉnh sửa</Button>
            <Button
              variant="danger"
              style={{ marginLeft: "10px" }}
              onClick={() => handleDelete()}
            >
              Xóa
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
