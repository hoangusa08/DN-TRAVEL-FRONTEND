import React from "react";
import SuggestionsHome from "../../components/SuggestionsHome/SuggestionsHome";
import MainLayout from "../../layout/MainLayout";
import WhyTracel from "./components/whyTravel/WhyTracel";

export default function Home() {
  return (
    <MainLayout>
      <WhyTracel/>
      <SuggestionsHome/>
      <SuggestionsHome/>
      <SuggestionsHome/>
    </MainLayout>
  );
}
