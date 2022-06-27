import React, { useEffect } from "react";
import axios from "axios";

export default function useGetApiCurrency() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState(null);

  const getCurrency = async () => {
    try {
      setIsLoading(true);
      await axios.get(`https://free.currconv.com/api/v7/convert?q=USD_VND&compact=ultra&apiKey=23a1b26a60d65217af77`).then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  return [data, isLoading];
}
