import { CachingManager } from '../cachingManager';
import { Currency, Query } from 'shared';

const BASE_URL = 'http://192.168.68.107:8000';
const cache: Record<string, any> = {};

export const caching = async (key: string, value: any) => {
  cache[key] = value;
  return value;
};

export const getCurrencies = async (): Promise<Currency[]> => {
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

export const sendQuery = async (query: Query) => {
  console.log(query);
  try {
    const result = await fetch(BASE_URL + '/addQuery', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(query),
    });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const getQueries = async () => {
  let queries: Query[] = [];

  queries = CachingManager.getCache('getQueries');
  try {
    queries = await (await fetch(BASE_URL + '/getQueries'))
      .json()
      .then((val: Query[]) => val);
    console.log(queries);
    CachingManager.setCache('getQueries', queries);
  } catch (err) {
    console.error(err);
  }
  return queries;
};
