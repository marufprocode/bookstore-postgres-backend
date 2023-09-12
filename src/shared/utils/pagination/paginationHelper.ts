import {
  CustomPaginationOptions,
  IPaginationOptions,
} from '../../interfaces/interfaces';

const paginationHelper = (
  paginationOptions: Partial<IPaginationOptions>
): CustomPaginationOptions => {
  const page = Number(paginationOptions.page) || 1;
  const limit = Number(paginationOptions.limit) || 10;
  const sort = {
    [paginationOptions.sortBy || 'createdAt']:
      paginationOptions.sortOrder || 'asc',
  };
  const skip = Number((page - 1) * limit);

  return {
    page,
    limit,
    skip,
    sort,
  };
};

export default paginationHelper;
