import React, { useEffect, useState } from "react";
import "./Image.scss";

export default function Image({ data }) {
  const [imgDefault, setImgDefault] = useState("");

  useEffect(() => {
    setImgDefault(data?.tourImage[0]);
  }, [data]);

  const handleImg = (index) => {
    setImgDefault(data?.tourImage[index]);
  };

  return (
    <div className="image">
      <div className="image-view">
        <img src={imgDefault} alt="" />
      </div>
      <div className="image-menu-bottom">
        {data?.tourImage?.map((img, index) => (
          <img
            src={img}
            alt=""
            onClick={() => handleImg(index)}
            key={index}
          ></img>
        ))}
      </div>
    </div>
  );
}
