import React from "react";
import DepartureSchedule from "./DepartureSchedule";
import Description from "./Description/Description";
import Image from "./Image";
import "./Menu.scss";
import Rated from "./Rated/Rated";


export default function Menu() {
  return <div className="menu-tour">
    <Image/>
    <DepartureSchedule/>
    <Description/>
    <Rated/>
  </div>;
}
