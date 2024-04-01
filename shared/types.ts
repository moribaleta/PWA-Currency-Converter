export type Currency = {
  name: string;
  symbol: string;
  conversionRate: number;
};

export type Query = {
  currency1: string;
  currency2: string;
  dateCreated: Date;
  value: number;
};
