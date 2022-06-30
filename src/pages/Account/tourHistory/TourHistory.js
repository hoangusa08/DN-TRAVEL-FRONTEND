import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import { PAYMENT_STATUS } from "../../../core/constants";
import useGetPaymentByStatus from "../../../hook/useGetPaymentByStatus";
import UserNavigation from "../Component/UserNavigation";
import "./TourHistory.scss";

export default function TourHistory() {
  const [datas, getPaymentByStatus] = useGetPaymentByStatus();
  const history = useHistory();
  useEffect(() => {
    getPaymentByStatus(PAYMENT_STATUS.COMPLETE);
  }, []);

  return (
    <div>
      <TopBarMenu />
      <div className="tour-history-ctn">
        <UserNavigation />
        <div
          style={{
            width: "100%",
            minHeight: "90vh",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Stt</th>
                <th style={{width: "100px"}}>Tour</th>
                <th>Ảnh</th>
                <th>Nhà Cung Cấp</th>
                <th>Ngày Khởi Hành</th>
                <th>Người lớn</th>
                <th>Trẻ em</th>
                <th>Tổng tiền</th>
                <th>Danh gia</th>
              </tr>
            </thead>
            <tbody>
              {datas?.map((pay) => (
                <tr key={pay.id}>
                  <td>{pay.id}</td>
                  <td>{pay.tourName}</td>
                  <td>
                    <img className="image" src={pay.image} alt="" />
                  </td>
                  <td>{pay.providerName}</td>
                  <td>{pay.schedule}</td>
                  <td>{pay.adultNumber}</td>
                  <td>{pay.childrenNumber}</td>
                  <td>{pay.total}</td>
                  <td>
                    <Button
                      onClick={() => history.push(`/rateTour/${pay.tourId}`)}
                    >
                      Dánh Giá
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
