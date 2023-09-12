import { paginationFields } from '../../constants/pagination';
import { CustomPaginationOptions } from '../../interfaces/interfaces';
import searchAndFilterHelper from '../filter/searchAndFilterHelper';
import paginationHelper from '../pagination/paginationHelper';
import pick from '../pick';

export const getSearchAndPaginationOptions = <
  T extends object,
  K extends keyof Partial<T>,
  M extends keyof Partial<T>
>(
  query: T,
  filterFields: K[],
  searchFields: M[]
): {
  searchAndFilter: any;
  page: number;
  limit: number;
  skip: number;
  sort: any;
} => {
  const filters: Partial<T> = pick(query, filterFields);

  const search: string = (() => {
    if ('searchTerm' in query) {
      return query['searchTerm'] as string;
    }
    return '';
  })();

  const paginationOptions = pick<T, keyof T>(
    query,
    paginationFields as (keyof T)[]
  );

  const { page, limit, skip, sort }: CustomPaginationOptions =
    paginationHelper(paginationOptions);

  const searchAndFilter = <T>(
    searchAndFilterHelper(filters, search, searchFields as M[])
  );

  return {
    searchAndFilter,
    page,
    limit,
    skip,
    sort,
  };
};
