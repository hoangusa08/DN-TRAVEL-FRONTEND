import React, { useState } from "react";
import "./MenuChild.scss";

export default function MenuChild({ title, items }) {
  const [active, setActive] = useState(-1);
  const [index, setIndex] = useState(10);

  const isActive = (index) => {
    if (active === index) {
      return "menuChild--item active";
    }
    return "menuChild--item";
  };
  const handleSeeMore = () => {
    if (index <= items.length - 10) {
      setIndex(index + 10);
    } else setIndex(items.length);
  };
  return (
    <div className="menuChild">
      <div className="menuChild--title">
        <span>{title}</span>
      </div>
      {items.slice(0, index).map((item, index) => (
        <div
          key={index}
          className={isActive(index)}
          onClick={() => setActive(index)}
        >
          {" "}
          {item}
        </div>
      ))}
      {index < items.length ? (
        <div className="seeMore" onClick={() => handleSeeMore()}>see more</div>
      ) : (
        ""
      )}
    </div>
  );
}
