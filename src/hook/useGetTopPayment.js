import http from "../core/services/httpService";
import React, { useEffect } from "react";

export default function useGetTopPayment() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getTopPayment = async () => {
    try {
      setIsLoading(true);
      await http.get(`/tour/top-payment`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTopPayment();
  }, []);

  return [data, isLoading];
}
