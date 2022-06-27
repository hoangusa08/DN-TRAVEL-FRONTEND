import http from "../core/services/httpService";
import React, { useEffect } from "react";

export default function useGetCategories() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getCategories = async () => {
    try {
      setIsLoading(true);
      await http.get(`/category`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return [data, isLoading];
}
