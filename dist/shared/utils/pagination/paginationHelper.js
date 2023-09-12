"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const paginationHelper = (paginationOptions) => {
    const page = Number(paginationOptions.page) || 1;
    const limit = Number(paginationOptions.limit) || 10;
    const sort = {
        [paginationOptions.sortBy || 'createdAt']: paginationOptions.sortOrder || 'asc',
    };
    const skip = Number((page - 1) * limit);
    return {
        page,
        limit,
        skip,
        sort,
    };
};
exports.default = paginationHelper;
