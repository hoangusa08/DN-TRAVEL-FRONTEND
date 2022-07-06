import React from "react";
import SuggestionsHome from "../../components/SuggestionsHome/SuggestionsHome";
import SuggestionsTopPayment from "../../components/SuggestionsHome/SuggestionsTopPayment";
import useGetToursDasboard from "../../hook/useGetToursDasboard";
import MainLayout from "../../layout/MainLayout";
import WhyTracel from "./components/whyTravel/WhyTracel";

export default function Home() {

  const [data] = useGetToursDasboard();
  return (
    <MainLayout>
      <WhyTracel/>
      <SuggestionsTopPayment/>
      <SuggestionsHome start={data?.start1}  tours={data?.tours1}/>
      <SuggestionsHome start={data?.start2}  tours={data?.tours2}/>
    </MainLayout>
  );
}
