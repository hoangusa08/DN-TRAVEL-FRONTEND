import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { pushToast } from "../../../components/Toast";
import TopBarMenu from "../../../components/TopBarMenu/TopBarMenu";
import { PAYMENT_STATUS } from "../../../core/constants";
import http from "../../../core/services/httpService";
import useGetPaymentByStatus from "../../../hook/useGetPaymentByStatus";
import UserNavigation from "../Component/UserNavigation";
import "./TourWaiting.scss";

export default function TourWaiting() {
  const [datas, getPaymentByStatus] = useGetPaymentByStatus();
  const [show, setShow] = useState(false);
  const [idPayment, setidPayment] = useState(0);

  useEffect(() => {
    getPaymentByStatus(PAYMENT_STATUS.WAITNG);
  }, []);

  const handleStatus = () => {
    http
      .post(`/provider/book-tour/${idPayment}/CUS_CANCEL`)
      .then((res) => {
        pushToast("success", res.message);
        getPaymentByStatus(PAYMENT_STATUS.WAITNG);
        handleClose();
      })
      .catch((e) => {
        pushToast("error", e?.message);
      });
  };

  const handleShow = (id) => {
    setidPayment(id);
    setShow(true);
  };
  const handleClose = () => setShow(false);

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
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Xoá tour đã đặt</Modal.Title>
            </Modal.Header>
            <Modal.Body>
             Bạn có muốn xóa không
            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleStatus}>
                Xóa
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
            </Modal.Footer>
          </Modal>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Stt</th>
                <th>Tour</th>
                <th>Nhà Cung Cấp</th>
                <th>Ngày Khởi Hành</th>
                <th>Người lớn</th>
                <th>Trẻ em</th>
                <th>Tổng tiền</th>
                <th>Hành động</th>
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
                  <td>
                    <Button variant="danger" onClick={() => handleShow(pay?.id)}>Xóa</Button>
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
