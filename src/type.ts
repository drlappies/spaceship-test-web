export interface Price {
  coin: string;
  data: Record<string, number>;
}

export interface PriceList {
  data: Price[];
}
