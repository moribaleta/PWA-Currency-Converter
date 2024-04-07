import { CachingManager } from '../cachingManager';
import { Currency, Query } from 'shared';

const BASE_URL = 'http://192.168.68.107:8000';
const cache: Record<string, any> = {};
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

export const caching = async (key: string, value: any) => {
  cache[key] = value;
  return value;
};

export const getCurrencies = async (): Promise<Currency[]> => {
  let currencies: Currency[] = [];

  currencies = CachingManager.getCache('getCurrencies');
  try {
    currencies = await (
      await fetch(BASE_URL + '/getCurrencies', { signal: controller.signal })
    )
      .json()
      .then((val: Currency[]) => val);
    CachingManager.setCache('getCurrencies', currencies);
  } catch (err) {
    console.error('@getCurrencies', err);
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
      signal: controller.signal,
    });
    console.log(result);
  } catch (err) {
    console.error('@sendQuery', err);
  }
};

export const getQueries = async () => {
  let queries: Query[] = [];

  queries = CachingManager.getCache('getQueries');
  try {
    queries = await (
      await fetch(BASE_URL + '/getQueries', { signal: controller.signal })
    )
      .json()
      .then((val: Query[]) => val);
    console.log(queries);
    CachingManager.setCache('getQueries', queries);
  } catch (err) {
    console.error('@getQueries', err);
  }
  return queries;
};
