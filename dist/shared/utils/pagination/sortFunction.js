"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortFunction = (sortBy, sortOrder) => {
    const sortOptions = {
        [sortBy]: sortOrder === 'asc' ? 1 : -1,
    };
    return sortOptions;
};
exports.default = sortFunction;
