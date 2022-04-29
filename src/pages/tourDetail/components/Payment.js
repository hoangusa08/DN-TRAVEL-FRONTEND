import React, { useState } from "react";
import "./Payment.scss";

export default function Payment() {
  const [startDay, setStartDay] = useState("");

  const changeFruit = (newFruit) => {
    setStartDay(newFruit);
  };
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
        <option value="" disabled selected>Select your option</option>
        <option value="oranges">Outrageous Oranges</option>
        <option value="tomatoes">Technically a Fruit Tomatoes</option>
        <option value="bananas">Bodacious Bananas</option>
      </select>

      <Item title="Nguoi Lon"></Item>
      <Item title="Tre Em"></Item>
      <div className="total">
        <span className="total--title"> Tong Cong :</span>
        <span className="total--price"> 8700000&nbsp; VND</span>
      </div>
      <div className="function">
        <button className="concat">Lien He Tu Van</button>
        <button className="order">Dat tour</button>
      </div>
    </div>
  );
}

function Item({ title }) {
  return (
    <div className="box-white">
      <span className="box-white-title">{title}</span>
      <span className="price">x2000000</span>
      <button className="sum">+</button>
      <span className="total">2</span>
      <button className="sub">-</button>
    </div>
  );
}
