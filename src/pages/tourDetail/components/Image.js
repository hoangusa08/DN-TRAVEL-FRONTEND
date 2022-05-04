import React, { useState } from "react";
import "./Image.scss";

export default function Image() {

  const [imgDefault, setImgDefault] = useState("https://cdn2.ivivu.com/2020/07/14/14/ivivu-phu-quoc-bia-750x390.gif");
  const [srcImgs] = useState([
    "https://cdn2.ivivu.com/2020/07/14/14/ivivu-phu-quoc-bia-750x390.gif",
    "https://cdn2.ivivu.com/2019/10/14/18/ivivu-lan-ngam-san-ho1.jpg",
    "https://expatsholidays.com/wp-content/uploads/2018/07/Beach.jpeg",
    "https://cdn1.ivivu.com/iVivu/2019/06/13/19/3-cr-800x450.png",
  ])

  const handleImg = (index) => {
    setImgDefault(srcImgs[index]);
  }

  return <div className="image">
    <div className="image-view">
      <img src={imgDefault} alt=""/>
    </div>
    <div className="image-menu-bottom">
      {
        srcImgs.map((img, index) => (
          <img src={img} alt="" onClick={()=> handleImg(index)} key={index}></img>
        ))
      }
    </div>
  </div>;
}
