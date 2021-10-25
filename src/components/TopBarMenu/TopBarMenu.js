import React from "react";
import "./TopBarMenu.scss";

export default function TopBarMenu() {
  return (
    <div className="TopBarMenu">
      <div className="row custom-container">
        <div className="col">
          <div className="">logo</div>
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
