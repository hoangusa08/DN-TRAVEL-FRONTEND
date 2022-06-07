import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUser } from "../../../core/localStore";
import "./UserNavigation.scss";

export default function UserNavigation() {
  const [user] = useState(getUser());
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
      <div className="">
        <div>
          <img
            src="https://img.vn/uploads/danhmuc/phuoc-dong-1564026880-c6z5u.jpg"
            alt="user"
          ></img>
        </div>
      </div>
      <div
        className={
          active === "tourFuture"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("tourFuture")}
      >
        Ki nghi sap toi
      </div>
      <div
        className={
          active === "tourHistory"
            ? "userNavigation-item active"
            : "userNavigation-item "
        }
        onClick={() => handleClick("tourHistory")}
      >
        Ki nghi da di
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
