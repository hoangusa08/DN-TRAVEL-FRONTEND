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
  const [theRest, setTheRest] = useState(0);
  const changeFruit = (newFruit) => {
    setStartDay(newFruit);
    for (let schedule of data?.schedules) {
      if (+schedule.id === +newFruit)
        setTheRest(
          +data.numberPeople -
            +schedule.currentPeople -
            adultAmount -
            childAmount
        );
    }
  };

  React.useEffect(() => {
    if (data) {
      setStartDay(data?.schedules[0].id);
      setTheRest(+data.numberPeople - +data?.schedules[0].currentPeople);
    }
  }, [data]);

  React.useEffect(() => {
    if (data) {
      setTotal(adultAmount * data?.adultPrice + childAmount * data?.childPrice);
      setTheRest(
        +data.numberPeople -
          +data?.schedules[0].currentPeople -
          adultAmount -
          childAmount
      );
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

  const checkPayment = async () => {
    await http
      .post("/tour/check-payment", {
        customerId: user?.id,
        tourId: data?.id,
        scheduleId: startDay,
      })
      .then((res) => {
        if (res.data === false) {
          pushToast("error", "Tour n??y b???n ???? ?????t");
        }
        setisPayment(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="payment">
      {!isPayment ? (
        <>
          {" "}
          <div className="title">
            <span>L???ch kh???i h??nh & gi??</span>
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
          <div className="box-white">
            <span className="box-white-title">S??? ch??? c??n l???i</span>
            <span className="price">{theRest}</span>
          </div>
          <Item
            title="Ng?????i L???n"
            price={data?.adultPrice}
            amount={adultAmount}
            theRest={theRest}
            setAmount={setAdultAmount}
          ></Item>
          <Item
            title="Tr??? Em"
            price={data?.childPrice}
            amount={childAmount}
            setAmount={setChildAmount}
            theRest={theRest}
          ></Item>
          <div className="total">
            <span className="total--title"> T???ng C???ng :</span>
            <span className="total--price">
              {total}
              &nbsp; VND
            </span>
          </div>
          <div className="function">
            <button className="concat">Li??n h??? t?? v???n</button>
            {user ? (
              <button
                className="order"
                disabled={total === 0 || adultAmount === 0}
                onClick={() => checkPayment()}
              >
                ?????t tour
              </button>
            ) : (
              <button
                className="order"
                onClick={() => {
                  sessionStore.setItem("link", id);
                  history.push("/login");
                }}
              >
                ????ng nh???p
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

function Item({ title, price, amount, setAmount, theRest }) {
  return (
    <div className="box-white">
      <span className="box-white-title">{title}</span>
      <span className="price">x{price}</span>
      <button
        className="sum"
        onClick={() => setAmount(amount + 1)}
        disabled={theRest === 0}
      >
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
