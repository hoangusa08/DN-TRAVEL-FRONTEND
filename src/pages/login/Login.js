import React, { useState } from "react";
import Input from "./component/input/Input";
import "./Login.scss";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { login } from "../../store/user";

export default function Login() {
  const dispatch = useDispatch();
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const handleOnChangeInput = (data, type) => {
    if (type === "password") {
      setDataLogin({ ...dataLogin, password: data });
    } else {
      setDataLogin({ ...dataLogin, email: data });
    }
  };
  const sumitLogin = () => {
    dispatch(login(dataLogin));
  };
  return (
    <div className="login">
      <div className="login-ctn">
        <div className="row custom">
          <div className="col-6">
            <div className="ctn-input">
              <Input
                placeholder="Email"
                type="text"
                icon={faUser}
                handleOnChangeInput={handleOnChangeInput}
                value={dataLogin.email}
              />
              <Input
                placeholder="Password"
                type="password"
                icon={faKey}
                handleOnChangeInput={handleOnChangeInput}
                value={dataLogin.password}
              />
              <button onClick={sumitLogin}>login</button>
            </div>
          </div>
          <div className="col-6">
            <img src="https://file3.qdnd.vn/data/images/0/2021/10/13/tuanson/6%201.jpg?dpi=150&quality=100&w=870" />
          </div>
        </div>
      </div>
    </div>
  );
}
