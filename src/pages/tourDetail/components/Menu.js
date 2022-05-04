import React from "react";
import DepartureSchedule from "./DepartureSchedule";
import Image from "./Image";
import "./Menu.scss";


export default function Menu() {
  return <div className="menu-tour">
    <Image/>
    <DepartureSchedule/>
  </div>;
}
