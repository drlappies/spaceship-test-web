import { httpClient } from "../httpClient";
import { PriceList } from "../type";

export const getPriceList = async (): Promise<PriceList> => {
  const response = await httpClient.get("/v1/price");
  return response.data;
};
