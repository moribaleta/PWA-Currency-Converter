import { CachingManager } from '../cachingManager';
import { Currency } from 'shared';

const BASE_URL = 'http://192.168.68.107:8000';
const cache: Record<string, any> = {};

export const caching = async (key: string, value: any) => {
  cache[key] = value;
  return value;
};

export const getCurrencies = async (): Promise<Currency[]> => {
  console.log('@getCurrencies', process.env.BASE_URL);
  let currencies: Currency[] = [];

  currencies = CachingManager.getCache('getCurrencies');
  try {
    currencies = await (await fetch(BASE_URL + '/getCurrencies'))
      .json()
      .then((val: Currency[]) => val);
    console.log(currencies);
    CachingManager.setCache('getCurrencies', currencies);
  } catch (err) {
    console.error(err);
  }
  return currencies;
};
