import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Input.scss";

export default function Input({ ...props }) {
  const { handleOnChangeInput } = props;
  const handleOnChange = (e) => {
    e.preventDefault();
    handleOnChangeInput(e.target.value, props.type);
  };
  return (
    <div className="input">
      <div className="icon-ctn">
        <span>
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </div>
      <input
        value={props.value}
        onChange={handleOnChange}
        type={props.type}
        placeholder={props.placeholder}
        className="text"
      ></input>
    </div>
  );
}
