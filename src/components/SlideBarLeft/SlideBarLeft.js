import React from "react";
import MenuChild from "./component/MenuChild";
import "./SlideBarLeft.scss";

const menu = {
  index: 1,
  title: "Theo Tinh",
  items: ["Da Nang", "Hue", "Quang Ngai", "Quang Nam", "Nha Trang", "Ha Noi"],
};

const menu2 = {
  index: 2,
  title: "Theo Loai",
  items: ["Da Nang", "Hue", "Quang Ngai", "Quang Nam", "Nha Trang", "Ha Noi"],
};

export default function SlideBarLeft() {
  return (
    <div className="slide-bar-left">
      <MenuChild {...menu} />
      <MenuChild {...menu2} />
    </div>
  );
}
