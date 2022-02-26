import React from "react";
import TopBarMenu from "../components/TopBarMenu/TopBarMenu";
import Bottom from "../components/Bottom/Bottom";
import Slider from "../components/SlideBar/Slider";

export default function MainLayout(props) {
  return (
    <div>
      <TopBarMenu />
      <Slider />
        {props.children}
      <Bottom />
    </div>
  );
}
