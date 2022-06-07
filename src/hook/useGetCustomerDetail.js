import http from "../core/services/httpService";
import React from "react";

export default function useGetCustomerDetail() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getCategories = async (id) => {
    try {
      setIsLoading(true);
      await http.get(`/customer/${id}`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  return [data, getCategories, isLoading];
}