import http from "../core/services/httpService";
import React, { useEffect } from "react";

export default function useGetProvince() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getProvinces = async () => {
    try {
      setIsLoading(true);
      await http.get(`/province`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  return [data, isLoading];
}
