import React from "react";
import "./UserNavigation.scss";

export default function UserNavigation() {
  return (
    <div className="userNavigation">
      <div className="" >
        <div>
          <img src="https://img.vn/uploads/danhmuc/phuoc-dong-1564026880-c6z5u.jpg" alt="="></img>
        </div>
        <span>hoangksh99</span>
      </div>
      <div className="userNavigation-item">Ki nghi sap toi</div>
      <div className="userNavigation-item active">Ki nghi da di</div>
      <div className="userNavigation-item">hoangksh99@gmail.com</div>
    </div>
  );
}
