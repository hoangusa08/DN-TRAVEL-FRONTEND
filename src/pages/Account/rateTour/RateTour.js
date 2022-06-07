import React from "react";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import UserNavigation from "../Component/UserNavigation";
import "./RateTour.scss";
import ReactStars from "react-rating-stars-component";

export default function RateTour() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div>
      <TopBarMenu />
      <div className="account-ctn">
        <UserNavigation />
        <div style={{ width: "100%", minHeight: "90vh" }}>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          ,
        </div>
      </div>
    </div>
  );
}
