import React, { useState } from "react";
import "./TopBarMenu.scss";
import logo from "../../assets/image/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default function TopBarMenu( { handleMenu}) {

  // const [showMenuState, setShowMenuState] = useState(false);

  // const showMenu = () => {
  //   setShowMenuState(!showMenuState);
  //   console.log(showMenuState);
  // }

  return (
    <div className="TopBarMenu">
      <div className="row custom-container">
        <div className="col-3">
          <img className="logo" src={logo}></img>
        </div>
        <div className="col middle-menu">
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
        <div className="col-3 middle-menu">
          <div className="row">
            <div className="col">đăng nhập</div>
            <div className="col">đăng kí</div>
          </div>
        </div>
        <div className="button-menu">
          <button className="button-child" onClick={handleMenu} >
            <FontAwesomeIcon icon={solid("bars")} />
          </button>
        </div>
      </div>
    </div>
  );
}
