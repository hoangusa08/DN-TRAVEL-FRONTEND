import React from "react";
import "./whyTravel.scss";
import Tick from "../../../../assets/image/Tick-Icon.png";

export default function WhyTracel() {
  return (
    <div className="why-travel">
      <Item content={"Tour chọn lọc chất lượng nhất"} />
      <Item content={"Bảo đảm giá tốt nhất"} />
      <Item content={"Đội ngũ tư vấn chi tiết và tận tình"} />
    </div>
  );
}

function Item({ content }) {
  return (
    <div className="why-travel-content">
      <img src={Tick} className="tick" alt="" />
      <div className="content">{content.toUpperCase()}</div>
    </div>
  );
}
