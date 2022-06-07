import React, {  useLayoutEffect, useState } from "react";
import "./TopBarMenu.scss";
import logo from "../../assets/image/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useHistory } from "react-router-dom";
import { getUser } from "../../core/localStore";
import AvatarDefauld from "../../assets/image/avatar-default-white.png";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../store/user";
import { useDispatch } from "react-redux";

export default function TopBarMenu({ handleMenu }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useLayoutEffect(() => {
    const temp = getUser();
    if (temp) {
      setUser(temp?.fullname);
      setIsLogin(true);
    }
  }, []);

  const onLogOut = () => {
    dispatch(logout());
  };

  // const [showMenuState, setShowMenuState] = useState(false);

  // const showMenu = () => {
  //   setShowMenuState(!showMenuState);
  //   console.log(showMenuState);
  // }

  return (
    <div className="TopBarMenu" onClick={() => setDropDown(false)}>
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
              <a href="a">Ban Do</a>
            </div>
            <div className="col">
              <a href="a">Lien He</a>
            </div>
          </div>
        </div>
        <div className="col-3 middle-menu">
          <div className="row">
            {!isLogin ? (
              <>
                <div className="col">
                  <Link to="/login">đăng nhập</Link>
                </div>
                <div className="col">
                  <Link to="/register">đăng kí</Link>
                </div>
              </>
            ) : (
              <div className="col user">
                <img src={AvatarDefauld} alt="" className="avatar" />
                <div
                  className="name"
                  onClick={(e) => {
                    setDropDown(!dropDown);
                    e.stopPropagation();
                  }}
                >
                  {user}{" "}
                  <i>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </i>
                </div>
                {dropDown ? (
                  <div className="dropDown">
                    <div className="item" onClick={()=> history.push("/Account")}>My Account</div>
                    <div className="item"> doan 1</div>
                    <div className="item" onClick={() => onLogOut()}>
                      Log Out
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="button-menu">
          <button className="button-child" onClick={handleMenu}>
            <FontAwesomeIcon icon={solid("bars")} />
          </button>
        </div>
      </div>
    </div>
  );
}
