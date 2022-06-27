import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getToursByPath } from "../../../store/tours";
import "./MenuChild.scss";

export default function MenuChild({ title, items }) {
  const [active, setActive] = useState(-1);
  const [index, setIndex] = useState(10);

  const dispatch = useDispatch();

  const handleDispatch = (id) => {
    if (title === "Thể loại") dispatch(getToursByPath("category", id));
    else dispatch(getToursByPath("province", id));
  };

  const isActive = (index) => {
    if (active === index) {
      return "menuChild--item active";
    }
    return "menuChild--item";
  };
  const handleSeeMore = () => {
    if (index <= items?.length - 10) {
      setIndex(index + 10);
    } else setIndex(items?.length);
  };
  return (
    <div className="menuChild">
      <div className="menuChild--title">
        <span>{title}</span>
      </div>
      {items?.slice(0, index).map((item, index) => (
        <div
          key={index}
          className={isActive(index)}
          onClick={() => handleDispatch(item?.id)}
        >
          {item?.name}
        </div>
      ))}
      {index < items?.length ? (
        <div className="seeMore" onClick={() => handleSeeMore()}>
          Nhiều hơn
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
