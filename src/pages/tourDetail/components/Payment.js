import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import React, { useCallback, useState } from "react";
import "./Payment.scss";

export default function Payment({ data }) {
  const [startDay, setStartDay] = useState("");

  const [childAmount, setChildAmount] = useState(0);
  const [adultAmount, setAdultAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const changeFruit = (newFruit) => {
    setStartDay(newFruit);
  };

  React.useEffect(() => {
    if (data) {
      setTotal(adultAmount * data?.adultPrice + childAmount * data?.childPrice);
    }
  }, [adultAmount, childAmount]);

  return (
    <div className="payment">
      <div className="title">
        <span>Lịch khởi hành & giá</span>
      </div>
      <select
        className="startDay"
        onChange={(event) => changeFruit(event.target.value)}
        value={startDay}
      >
        {data?.schedules?.map((schedule, index) => (
          <option value={schedule.id} selected={index === 0} key={schedule.id}>
            {schedule.date}
          </option>
        ))}
      </select>
      <Item
        title="Nguoi Lon"
        price={data?.adultPrice}
        amount={adultAmount}
        setAmount={setAdultAmount}
      ></Item>
      <Item
        title="Tre Em"
        price={data?.childPrice}
        amount={childAmount}
        setAmount={setChildAmount}
      ></Item>
      <div className="total">
        <span className="total--title"> Tong Cong :</span>
        <span className="total--price">
          {total}
          &nbsp; VND
        </span>
      </div>
      <div className="function">
        <button className="concat">Lien He Tu Van</button>
        {/* <button className="order">Dat tour</button> */}
        <PayPalScriptProvider
          options={{ "client-id": process.env.REACT_APP_PAYPAL }}
        >
          <PayPalButtons
            createOrder={useCallback((data, actions) => {
              console.log( (total / 23000).toFixed(2));
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: (total / 23000).toFixed(2),
                    },
                  },
                ],
              });
            }, [total])}
            onApprove={async (data, actions) => {
              const details = await actions.order.capture();
              const name = details.payer.name.given_name;
              alert("Transaction completed by " + name);
            }}
          />
        </PayPalScriptProvider>
      </div>
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
