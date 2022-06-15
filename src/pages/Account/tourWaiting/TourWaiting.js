import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import { PAYMENT_STATUS } from "../../../core/constants";
import useGetPaymentByStatus from "../../../hook/useGetPaymentByStatus";
import UserNavigation from "../Component/UserNavigation";
import "./TourWaiting.scss";

export default function TourWaiting() {
  const [datas, getPaymentByStatus] = useGetPaymentByStatus();

  useEffect(() => {
    getPaymentByStatus(PAYMENT_STATUS.WAITNG);
  }, []);

  useEffect(() => {
    console.log("---hoang---", datas);
  }, [datas]);

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
                <th>Tour</th>
                <th>Nha Cung Cap</th>
                <th>Ngay Khoi Hanh</th>
                <th>Nguoi lon</th>
                <th>Tre em</th>
                <th>Tong tien</th>
              </tr>
            </thead>
            <tbody>
              {datas?.map((pay) => (
                <tr key={pay.id}>
                  <td>{pay.id}</td>
                  <td>{pay.tourName}</td>
                  <td>{pay.providerName}</td>
                  <td>{pay.schedule}</td>
                  <td>{pay.adultNumber}</td>
                  <td>{pay.childrenNumber}</td>
                  <td>{pay.total}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
