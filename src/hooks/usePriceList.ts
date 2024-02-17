import { useEffect, useState, useCallback } from "react";
import * as priceService from "../services/price";
import { PriceList, Price } from "../type";

interface UsePriceList {
  priceList: PriceList;
  setPriceList: React.Dispatch<React.SetStateAction<PriceList>>;
  isError: boolean;
}

export const usePriceList = (): UsePriceList => {
  const [priceList, setPriceList] = useState<PriceList>({ data: [] });
  const [isError, setIsError] = useState(false);

  const getPriceList = useCallback(async () => {
    try {
      const response = await priceService.getPriceList();
      setPriceList(response);
    } catch (e: any) {
      setIsError(true);
    }
  }, []);

  const subcribePriceUpdate = useCallback(() => {
    const eventSource = new EventSource(
      (process.env.REACT_APP_SERVER_BASE_URL as string) +
        "/v1/event/price-updated"
    );

    eventSource.onmessage = ({ data }: MessageEvent<string>) => {
      const priceList = JSON.parse(data) as PriceList;
      setPriceList(priceList);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  useEffect(() => {
    getPriceList();
    subcribePriceUpdate();
  }, [getPriceList, subcribePriceUpdate]);

  return {
    priceList,
    setPriceList,
    isError,
  };
};
