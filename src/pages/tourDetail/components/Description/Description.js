import React from "react";
import "./Description.scss";

export default function Description({ data }) {

  return (
    <div
      className="description"
      id="description"
      dangerouslySetInnerHTML={{ __html: data?.description }}
    ></div>
  );
}
