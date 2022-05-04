import React, { useState } from "react";
import "./DepartureSchedule.scss";

import DatePicker from "react-datepicker";

const title = {
  start: "Ngày khởi hành",
  end: "Ngày về",
  status: "Tình trạng",
  price: "Gia",
};

const content = [
  {
    start: "T5, 12/05/2022",
    end: "T5, 12/05/2022",
    status: "Lien He",
    price: " 975.000 VND",
  },
  {
    start: "T5, 12/05/2022",
    end: "T5, 12/05/2022",
    status: "Lien He",
    price: " 975.000 VND",
  },
  {
    start: "T5, 12/05/2022",
    end: "T5, 12/05/2022",
    status: "Lien He",
    price: " 975.000 VND",
  },
  {
    start: "T5, 12/05/2022",
    end: "T5, 12/05/2022",
    status: "Lien He",
    price: " 975.000 VND",
  },
];

export default function DepartureSchedule() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="departureSchedule">
      <div className="departureSchedule-top">
        <div className="title">
          <strong>Lich KHoi Hanh</strong>
        </div>
        <div>
          <DatePicker
            selected={startDate}
            className="fromInput"
            onChange={(date) => {
              console.log(date);
              setStartDate(date);
            }}
          />
        </div>
      </div>
      <div className="departureSchedule-content">
        <Item isTitle={true} content={title}></Item>
        {content.map((con, index) => (
          <div key={index}>
            <Item isTitle={false} content={con} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ isTitle, content }) {
  if (isTitle) {
    return (
      <div className="item-title">
        <div>{content.start}</div>
        <div>{content.end}</div>
        <div>{content.status}</div>
        <div>{content.price}</div>
      </div>
    );
  }
  return (
    <div className="item-content">
      <div>{content.start}</div>
      <div>{content.end}</div>
      <div>{content.status}</div>
      <div>{content.price}</div>
    </div>
  );
}
