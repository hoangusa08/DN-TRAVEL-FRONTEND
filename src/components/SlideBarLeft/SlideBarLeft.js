import React from "react";
import MenuChild from "./component/MenuChild";
import "./SlideBarLeft.scss";
import { Province } from "../../assets/constant/provinces";

const menu2 = {
  title: "Theo Loai",
  items: Province.map( (provice) => provice.name),
};

export default function SlideBarLeft() {
  return (
    <div className="slide-bar-left">
      <MenuChild {...menu2} />
    </div>
  );
}
