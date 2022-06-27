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
      setUser(temp?.fullName);
      setIsLogin(true);
    }
  }, []);

  const onLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="TopBarMenu" onClick={() => setDropDown(false)}>
      <div className="row custom-container">
        <div className="col-md-3 col-sm-10 col-xs-10">
          <img className="logo" src={logo} alt=""></img>
        </div>
        <div className="col middle-menu">
          <div className="row">
            <div className="col">
              <Link to="/">Trang Chủ</Link>
            </div>
            <div className="col">
              <Link to="/Tour">Chuyến Du Lịch</Link>
            </div>
            <div className="col">
              <a href="a">Bản Đồ</a>
            </div>
            <div className="col">
              <a href="a">Liên Hệ</a>
            </div>
          </div>
        </div>
        <div className="col-3 middle-menu">
          <div className="row">
            {!isLogin ? (
              <>
                <div className="col">
                  <Link to="/login">Đăng Nhập</Link>
                </div>
                <div className="col">
                  <Link to="/register">Đăng Kí</Link>
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
                  {user}
                  <i>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </i>
                </div>
                {dropDown ? (
                  <div className="dropDown">
                    <div className="item" onClick={()=> history.push("/account")}>Tài Khoản Của Tôi</div>
                    <div className="item" onClick={() => onLogOut()}>
                      Đăng Xuất
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
