import http from "../core/services/httpService";
import React from "react";

export default function useFetchRateTour() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getRateTour = async (tourId, customerId) => {
    try {
      setIsLoading(true);
      await http.get(`/customer/tour/rate-tour/${tourId}/${customerId}`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  return [data, getRateTour, isLoading];
}