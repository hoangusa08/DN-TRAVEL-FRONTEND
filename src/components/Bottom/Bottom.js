import React from "react";
import "./Bottom.scss";

export default function Bottom() {
  return (
    <div className="bottom">
      <div className="row noti">
        <div className="col">
          <span> THÔNG TIN</span>
          <ul>
            <li>0339905697</li>
            <li>Dulichviet@gmail.com</li>
          </ul>
        </div>
        <div className="col">
          <span>MỤC LỤC</span>
          <ul>
            <li>Blogs</li>
            <li>Tour</li>
            <li>Bản đồ</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="col">
          <span>KHÁM PHÁ</span>
          <ul>
            <li>Điểm Đến Việt Nam</li>
            <li>Ẩm Thực Việt Nam</li>
            <li>Lễ hội Việt Nam</li>
            <li>Tin tức </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
