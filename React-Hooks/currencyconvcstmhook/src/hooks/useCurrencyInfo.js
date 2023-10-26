import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
      )
      .then((res) => res.json)
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
};
