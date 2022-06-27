import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { getUser } from "../../../core/localStore";
import "./UserNavigation.scss";
import avatarDefault from "../../../assets/image/avatar-default-white.png";

export default function UserNavigation() {
  // const [user] = useState(getUser());
  const [active, setActive] = useState("");
  const history = useHistory();
  const id = window.location.href.split("/");

  useEffect(() => {
    setActive(id[id.length - 1]);
  }, [id]);

  const handleClick = (value) => {
    history.push(`/${value}`);
  };
  return (
    <div className="userNavigation">
      <div className="top">
        <div className="img-ctn">
          <img
            src={avatarDefault}
            alt="user"
          ></img>
        </div>
        <button className="changeImg">Dổi ảnh</button>
      </div>
      <div
        className={
          active === "tourWaiting"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("tourWaiting")}
      >
        Tour đang chờ xác nhận
      </div>
      <div
        className={
          active === "tourFuture"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("tourFuture")}
      >
        Tour sắp tới
      </div>
      <div
        className={
          active === "tourHistory"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("tourHistory")}
      >
        Tour đã đi
      </div>
      <div
        className={
          active === "account"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("account")}
      >
       Tài Khoản
      </div>
      <div
        className={
          active === "changePass"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("changePass")}
      >
        Thay đổi mật khẩu
      </div>
    </div>
  );
}
