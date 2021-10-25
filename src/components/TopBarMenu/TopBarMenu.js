import React from "react";
import "./TopBarMenu.scss";
import logo from "../../assets/image/logo1.png";

export default function TopBarMenu() {
  return (
    <div className="TopBarMenu">
      <div className="row custom-container">
        <div className="col">
          <img className="logo" src={logo}></img>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-3">
              <a>asxac</a>
            </div>
            <div className="col-3">
              <a>asxac</a>
            </div>
            <div className="col-3">
              <a>asxac</a>
            </div>
            <div className="col-3">
              <a>asxac</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col">đăng nhập</div>
            <div className="col">đăng kí</div>
          </div>
        </div>
      </div>
    </div>
  );
}
