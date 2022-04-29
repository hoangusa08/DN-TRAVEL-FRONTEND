import React from "react";
import "./Image.scss";
const src = "https://cdn2.ivivu.com/2020/07/14/14/ivivu-phu-quoc-bia-750x390.gif";
const src2 = "https://cdn2.ivivu.com/2019/10/14/18/ivivu-lan-ngam-san-ho1.jpg";
export default function Image() {
  return <div className="image">
    <div className="image-view">
      <img src={src} alt=""/>
    </div>
    <div className="image-menu-bottom">
      <img src={src} alt=""></img>
      <img src={src2} alt=""></img>
      <img src={src} alt=""></img>
      <img src={src2} alt=""></img>
    </div>
  </div>;
}
