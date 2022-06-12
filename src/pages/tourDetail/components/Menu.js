import React from "react";
import DepartureSchedule from "./DepartureSchedule";
import Description from "./Description/Description";
import Image from "./Image";
import "./Menu.scss";
import Rated from "./Rated/Rated";

export default function Menu({ data }) {
 
  return (
    <div className="menu-tour">
      <Image data={data} />
      <DepartureSchedule data={data} />
      <Description data={data} />
      <Rated data={data} />
    </div>
  );
}
