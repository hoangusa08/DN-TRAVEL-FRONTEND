import React, { useState } from "react";
import { getUser } from "../../../core/localStore";
import http from "../../../core/services/httpService";
import "./Payment.scss";
import PaypalButton from "./Paypal";
import { pushToast } from "../../../components/Toast";
import { useHistory, useParams } from "react-router-dom";
import useGetApiCurrency from "../../../hook/useGetApiCurrency";
import sessionStore from "../../../core/sessionStore";

export default function Payment({ data }) {
  const [startDay, setStartDay] = useState(0);
  const [childAmount, setChildAmount] = useState(0);
  const [adultAmount, setAdultAmount] = useState(0);
  const [isPayment, setisPayment] = useState(false);
  const [total, setTotal] = useState(0);
  const user = getUser();
  const id = useParams();
  const history = useHistory();
  const [currency] = useGetApiCurrency();
  const changeFruit = (newFruit) => {
    setStartDay(newFruit);
  };

  React.useEffect(() => {
    if (data) {
      setStartDay(data?.schedules[0].id);
    }
  }, [data]);

  React.useEffect(() => {
    if (data) {
      setTotal(adultAmount * data?.adultPrice + childAmount * data?.childPrice);
    }
  }, [adultAmount, childAmount]);

  const handleSubmit = async () => {
    await http
      .post(`/customer/payment`, {
        adultNumber: adultAmount,
        childrenNumber: childAmount,
        total: total,
        scheduleId: startDay,
        tourId: data?.id,
        customerId: user?.id,
      })
      .then((res) => {
        pushToast("success", res.message);
        history.push("/tourWaiting");
      })
      .catch((e) => {
        pushToast("error", e?.message);
      });
  };

  return (
    <div className="payment">
      {!isPayment ? (
        <>
          {" "}
          <div className="title">
            <span>Lịch khởi hành & giá</span>
          </div>
          <select
            className="startDay"
            onChange={(event) => changeFruit(event.target.value)}
            value={startDay}
          >
            {data?.schedules?.map((schedule, index) => (
              <option value={schedule.id} key={schedule.id}>
                {schedule.date}
              </option>
            ))}
          </select>
          <Item
            title="Người Lớn"
            price={data?.adultPrice}
            amount={adultAmount}
            setAmount={setAdultAmount}
          ></Item>
          <Item
            title="Trẻ Em"
            price={data?.childPrice}
            amount={childAmount}
            setAmount={setChildAmount}
          ></Item>
          <div className="total">
            <span className="total--title"> Tổng Cộng :</span>
            <span className="total--price">
              {total}
              &nbsp; VND
            </span>
          </div>
          <div className="function">
            <button className="concat">Liên hệ tư vấn</button>
            {user ? (
              <button
                className="order"
                disabled={total === 0}
                onClick={() => setisPayment(true)}
              >
                Đặt tour
              </button>
            ) : (
              <button
                className="order"
                onClick={() => {
                  sessionStore.setItem("link", id);
                  history.push("/login");
                }}
              >
                Đăng nhập
              </button>
            )}
          </div>
        </>
      ) : (
        <PaypalButton
          productName={data?.name}
          totalFee={total}
          handleSuccess={handleSubmit}
          currency={currency}
        />
      )}
    </div>
  );
}

function Item({ title, price, amount, setAmount }) {
  return (
    <div className="box-white">
      <span className="box-white-title">{title}</span>
      <span className="price">x{price}</span>
      <button className="sum" onClick={() => setAmount(amount + 1)}>
        +
      </button>
      <span className="total">{amount}</span>
      <button
        className="sub"
        onClick={() => setAmount(amount - 1)}
        disabled={amount === 0}
      >
        -
      </button>
    </div>
  );
}
