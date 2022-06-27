import React from "react";
import MenuChild from "./component/MenuChild";
import "./SlideBarLeft.scss";
import useGetProvince from "../../hook/useGetProvince";
import useGetCategories from "../../hook/useGetCategories";


export default function SlideBarLeft() {
  const [provinces] = useGetProvince();
  const [categories] = useGetCategories()
  return (
    <div className="slide-bar-left">
      <MenuChild title={"Nơi khởi hành"} items={provinces} />
      <MenuChild title={"Thể loại"} items={categories} />
    </div>
  );
}
