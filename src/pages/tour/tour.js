
import CardTourDetail from "../../components/CardTourDetail/CardTourDetail";
import Pagination from "../../components/Pagination/Pagination";
import SlideBarLeft from "../../components/SlideBarLeft/SlideBarLeft";
import MainLayout from "../../layout/MainLayout";
import Function from "./Function/Function";
import "./tour.scss";

export default function Tour() {
 

  return (
    <MainLayout>
      <div className="tour">
        <div className="row">
          <div className="col-3">
            <SlideBarLeft />
          </div>
          <div className="col-9">
            <Function />
            <CardTourDetail></CardTourDetail>
          </div>
        </div>
        <div>
         <Pagination/>
        </div>
      </div>
    </MainLayout>
  );
}

