import React from "react";
import "./Register.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Register() {
  return (
    <div className="register">
      <div className="register-ctn">
        <div className="form-parent">
          <FontAwesomeIcon
            icon={faUser}
            className="icon"
            color="while"
            size="lg"
          />
          <input className="form-input" placeholder="username"></input>
        </div>
        <div>
          <input className="input-field"></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <div>
          <input></input>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
}
