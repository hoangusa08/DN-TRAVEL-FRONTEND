import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./UserNavigation.scss";
import avatarDefault from "../../../assets/image/avatar-default-white.png";
import { storage } from "../../../core/FireBase";
import http from "../../../core/services/httpService";
import { getUser, removeUser, setUserAvatar } from "../../../core/localStore";
import { pushToast } from "../../../components/Toast";

export default function UserNavigation() {
  const [active, setActive] = useState("");
  const [editAvatar, seteditAvatar] = useState(false);
  const history = useHistory();
  const id = window.location.href.split("/");
  const [avatar, setAvatar] = useState("");
  const user = getUser();

  useEffect(() => {
    setActive(id[id.length - 1]);
  }, [id]);

  useEffect(() => {
    setAvatar(user?.avatar);
  }, []);

  const handleClick = (value) => {
    history.push(`/${value}`);
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const uploadTask = storage
        .ref(`images/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              setAvatar(url);
              seteditAvatar(true);
            });
        }
      );
    }
  };

  const handlEditAvatar = () => {
    http
      .put("customer/edit-avatar", {
        customerId: user?.id,
        link: avatar,
      })
      .then((res) => {
        pushToast("success", res?.message);
        removeUser();
        setUserAvatar(res.data);
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="userNavigation">
      <div className="top">
        <div className="img-ctn">
          <img src={avatar ? avatar : avatarDefault} alt="user"></img>
        </div>
        {!editAvatar ? (
          <>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={handleChange}
            />
            <label htmlFor="file" className="chose-image">
              <span>Chọn ảnh</span>
            </label>
          </>
        ) : (
          <button className="changeImg" onClick={() => handlEditAvatar()}>
            Đổi ảnh
          </button>
        )}
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
