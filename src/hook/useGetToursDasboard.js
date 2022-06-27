import http from "../core/services/httpService";
import React, { useEffect } from "react";

export default function useGetToursDasboard() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getToursDasboard = async () => {
    try {
      setIsLoading(true);
      await http.get(`/tour/dasdboard/tour`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getToursDasboard();
  }, []);

  return [data, isLoading];
}
