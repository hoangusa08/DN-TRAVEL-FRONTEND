import http from "../core/services/httpService";
import React from "react";
import { getUser } from "../core/localStore";

export default function useGetPaymentByStatus() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const user = getUser();

  const getPaymentByStatus = async (status) => {
    try {
      setIsLoading(true);
      await http.get(`/customer/list-book-tour/${user.id}/${status}`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };
  
  return [data, getPaymentByStatus, isLoading];
}