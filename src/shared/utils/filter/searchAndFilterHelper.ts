const searchAndFilterHelper = <T, M>(
  filters: Partial<T>,
  search: string,
  searchFields: M[]
) => {
  const { minPrice, maxPrice, ...filtersData }: { [key: string]: any } =
    filters;
  const searchAndFilter: any[] = [];
  const filterDataArray = Object.keys(filtersData);
  if (search) {
    searchAndFilter.push({
      $or: searchFields.map((field: any) => ({
        [field]: { $regex: search, $options: 'i' },
      })),
    });
  } else {
    searchAndFilter.push({});
  }
  if (filterDataArray?.length) {
    searchAndFilter.push({
      $and: filterDataArray.map((field: string) => ({
        [field]: filtersData[field],
      })),
    });
  }

  if (minPrice !== undefined && maxPrice !== undefined) {
    searchAndFilter.push({
      price: { $gte: minPrice, $lte: maxPrice },
    });
  } else if (minPrice !== undefined) {
    searchAndFilter.push({
      price: { $gte: minPrice },
    });
  } else if (maxPrice !== undefined) {
    searchAndFilter.push({
      price: { $lte: maxPrice },
    });
  }

  return { $and: searchAndFilter };
};

export default searchAndFilterHelper;
