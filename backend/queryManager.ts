import { Query } from './types.ts';
import { CachingManager } from '../shared/cachingManager/index.ts';
import { QUERY_KEY } from './consts.ts';

export const QueryManager = {
  addQuery: (query: Query) => {
    const queries = QueryManager.getQueries();
    queries.push(query);
    console.log(queries);
    CachingManager.setCache(QUERY_KEY, queries);
  },
  getQueries: (): Query[] => {
    return CachingManager.getCache(QUERY_KEY) ?? [];
  },
};
