import React, { useState } from "react";
import "./MenuChild.scss";

export default function MenuChild({ index ,title, items }) {
  const [active, setActive] = useState(-1);

  const isActive = (index) => {
    if (active === index ){
      return "menuChild--item active"
    }
    return "menuChild--item"
  }
  return (
    <div className="menuChild">
      <div className="menuChild--title" >
        <span>{title}</span>
      </div>
      {items.map((item, index) => (
        <div key={index} className={isActive(index)} onClick={ () => setActive(index)}> {item}</div>
      ))}
    </div>
  );
}
