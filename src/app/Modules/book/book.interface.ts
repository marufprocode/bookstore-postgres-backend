export type IBookFilterRequest = {
    searchTerm?: string | undefined;
    category?: string | undefined;
    sortBy?: string | undefined;
    sortOrder?: 'asc' | 'desc' | undefined;
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
  };
  