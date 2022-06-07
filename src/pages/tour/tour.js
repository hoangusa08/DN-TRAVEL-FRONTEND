import CardTourDetail from "../../components/CardTourDetail/CardTourDetail";
import Pagination from "../../components/Pagination/Pagination";
import SlideBarLeft from "../../components/SlideBarLeft/SlideBarLeft";
import MainLayout from "../../layout/MainLayout";
import Function from "./Function/Function";
import "./tour.scss";
import React from "react";
import { getTours } from "../../store/tours";
import { useDispatch, useSelector } from "react-redux";

export default function Tour() {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.tours);

  React.useEffect(() => {
    dispatch(getTours("abc"));
  }, []);

  return (
    <MainLayout>
      <div className="tour">
        <div className="row">
          <div className="col-3">
            <SlideBarLeft />
          </div>
          <div className="col-9">
            <Function />
            {tours?.tours.map((tour, index) => (
              <CardTourDetail tour={tour} key={index} />
            ))}
          </div>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </MainLayout>
  );
}
