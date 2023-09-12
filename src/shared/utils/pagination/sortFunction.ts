const sortFunction = (sortBy: string, sortOrder: string) => {
  const sortOptions: { [key: string]: any } = {
    [sortBy as string]: sortOrder === 'asc' ? 1 : -1,
  };
  return sortOptions;
};

export default sortFunction;
