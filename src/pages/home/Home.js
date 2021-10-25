import React from "react";
import CardTour from "../../components/CardTour/CardTour";
import Slider from "../../components/SlideBar/Slider";
import TopBarMenu from "../../components/TopBarMenu/TopBarMenu";

export default function Home() {
  return (
    <div>
      <TopBarMenu />
      <Slider />
      <CardTour />
    </div>
  );
}
