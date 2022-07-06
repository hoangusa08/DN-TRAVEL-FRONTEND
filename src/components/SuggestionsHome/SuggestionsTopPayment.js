import React from "react";
import { useHistory } from "react-router-dom";
import useGetTopPayment from "../../hook/useGetTopPayment";
import CardTour from "../CardTour/CardTour";
import "./SuggestionsHome.scss";

export default function SuggestionsTopPayment({ ...props }) {
  const history = useHistory();
  const [tours] = useGetTopPayment();
  const goToListTour = () => {
    history.push("/Tour");
  };
  if (!tours) {
    return <div></div>;
  }
  return (
    <div className="suggestions-home">
      <div className="title">Tour được đặt nhiều nhất</div>
      <div className="row list-card">
        {tours?.map((tour, index) => (
          <div
            className="col-12 col-sm-6 col-xl-3 col-lg-3 col-md-4"
            key={index}
          >
            <CardTour tour={tour} />
          </div>
        ))}
      </div>
      <div className="ctn-seemore">
        <button
          className="see-more"
          onClick={() => {
            goToListTour();
          }}
        >
          xem nhieu hon
        </button>
      </div>
    </div>
  );
}
