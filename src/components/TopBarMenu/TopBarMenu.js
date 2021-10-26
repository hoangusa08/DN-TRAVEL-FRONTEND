import React from "react";
import "./TopBarMenu.scss";
import logo from "../../assets/image/logo1.png";

export default function TopBarMenu() {
  return (
    <div className="TopBarMenu">
      <div className="row custom-container">
        <div className="col-3">
          <img className="logo" src={logo}></img>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <a>Trang Chu</a>
            </div>
            <div className="col">
              <a>Tour</a>
            </div>
            <div className="col">
              <a>Blog</a>
            </div>
            <div className="col">
              <a>Ban Do</a>
            </div>
            <div className="col">
              <a>Lien He</a>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col">đăng nhập</div>
            <div className="col">đăng kí</div>
          </div>
        </div>
      </div>
    </div>
  );
}
