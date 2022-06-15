import React, { useState } from "react";
import "./DepartureSchedule.scss";
import DatePicker from "react-datepicker";

const title = {
  start: "Ngày khởi hành",
  end: "Ngày về",
  status: "Tình trạng",
};

export default function DepartureSchedule({ data }) {
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
              setStartDate(date);
            }}
          />
        </div>
      </div>
      <div className="departureSchedule-content">
        <Item isTitle={true} content={title} price={"Giá"}></Item>
        {data?.schedules.map((con, index) => (
          <div key={index}>
            <Item isTitle={false} content={con} price={data?.adultPrice} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Item({ isTitle, content, price }) {
  if (isTitle) {
    return (
      <div className="item-title">
        <div>{content.start}</div>
        <div>{content.status}</div>
        <div>{price}</div>
      </div>
    );
  }
  return (
    <div className="item-content">
      <div>{content?.date}</div>
      <div>Liên Hệ</div>
      <div>{price}</div>
    </div>
  );
}
