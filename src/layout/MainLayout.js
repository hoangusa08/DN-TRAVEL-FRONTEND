import React, { useState } from "react";
import TopBarMenu from "../components/TopBarMenu/TopBarMenu";
import Bottom from "../components/Bottom/Bottom";
import Slider from "../components/SlideBar/Slider";
import MenuMini from "../components/MenuMini/MenuMini";

export default function MainLayout(props) {
  const [showMeuMini, setShowMeuMini] = useState(false);

  const handleMenu = () => {
    setShowMeuMini(!showMeuMini);
    console.log("hoang");
  };
  return (
    <div>
      <TopBarMenu handleMenu={handleMenu} />
      {showMeuMini && <MenuMini />}
      <Slider />
      {props.children}
      <Bottom />
    </div>
  );
}
