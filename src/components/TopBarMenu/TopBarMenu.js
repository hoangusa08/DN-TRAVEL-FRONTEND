import React, { useState } from "react";
import "./TopBarMenu.scss";
import logo from "../../assets/image/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

export default function TopBarMenu( { handleMenu}) {

  const [isLogin] = useState(true)
  // const [showMenuState, setShowMenuState] = useState(false);

  // const showMenu = () => {
  //   setShowMenuState(!showMenuState);
  //   console.log(showMenuState);
  // }

  return (
    <div className="TopBarMenu">
      <div className="row custom-container">
        <div className="col-md-3 col-sm-10 col-xs-10">
          <img className="logo" src={logo} alt=""></img>
        </div>
        <div className="col middle-menu">
          <div className="row">
            <div className="col">
              <Link to="/">Trang Chu</Link>
            </div>
            <div className="col">
              <Link to="/Tour">Tour</Link>
            </div>
            <div className="col">
              <a href="a">Blog</a>
            </div>
            <div className="col">
              <a  href="a">Ban Do</a>
            </div>
            <div className="col">
              <a  href="a">Lien He</a>
            </div>
          </div>
        </div>
        <div className="col-3 middle-menu">
          <div className="row">
            {
              !isLogin ? (
                <>
                <div className="col"> <Link to="/login">đăng nhập</Link></div>
            <div className="col"><Link to="/register">đăng kí</Link></div>
                </>
              ):(
                <div className="col"><Link to="/account">My Account</Link></div>
              )
            }
            
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
