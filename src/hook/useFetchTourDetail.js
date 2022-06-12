import http from "../core/services/httpService";
import React from "react";

export default function useFetchTourDetail() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getTourDetail = async (id) => {
    try {
      setIsLoading(true);
      await http.get(`/tour/${id}`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  return [data, getTourDetail, isLoading];
}